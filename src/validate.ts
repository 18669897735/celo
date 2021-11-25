import { getTagByName } from "@kyve/core";
import {
  ListenFunctionObservable,
  ValidateFunctionSubscriber,
} from "@kyve/core/dist/src/faces";
import hash from "object-hash";
import { Logger } from "tslog";
import { ConfigType } from "./faces";
import { CeloJsonRpcProvider } from "./utils";

const validateFunction = (
  listener: ListenFunctionObservable,
  validator: ValidateFunctionSubscriber,
  config: ConfigType,
  logger: Logger
) => {
  logger.getChildLogger({
    name: "Celo",
  });

  // Connect to the RPC endpoint.
  const client = new CeloJsonRpcProvider(config.rpc);
  logger.info(`✅ Connection created. Endpoint = ${config.rpc}`);

  // Subscribe to the listener.
  listener.subscribe(async (res) => {
    for (const item of res.bundle) {
      const blockHash = getTagByName("Block", item.tags)!;

      logger.debug(`Found block. Hash = ${blockHash}`);

      const block = await client.getBlockWithTransactions(blockHash);
      // @ts-ignore
      delete block.extraData;
      if (block.transactions.length) {
        block.transactions.forEach(
          // @ts-ignore
          (transaction) => delete transaction.confirmations
        );
      }

      const localHash = hash(JSON.parse(JSON.stringify(block)));
      const uploaderHash = hash(JSON.parse(item.data));

      if (localHash !== uploaderHash) {
        validator.vote({
          transaction: res.transaction,
          valid: false,
        });
        return;
      }
    }

    validator.vote({
      transaction: res.transaction,
      valid: true,
    });
  });
};

export default validateFunction;
