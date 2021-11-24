import { UploadFunctionSubscriber } from "@kyve/core/dist/src/faces";
import { Logger } from "tslog";
import { ConfigType } from "./faces";
import { CeloWebSocketProvider } from "./utils";

const uploadFunction = (
  uploader: UploadFunctionSubscriber,
  config: ConfigType,
  logger: Logger
) => {
  logger = logger.getChildLogger({
    name: "Celo",
  });

  const main = () => {
    // Connect to the WebSocket endpoint.
    const client = new CeloWebSocketProvider(config.wss);
    logger.info(`✅ Connection created. Endpoint = ${config.wss}`);

    // Listen for hangups, and restart the connection.
    client._websocket.on("close", () => {
      logger.info("❎ Connection closed. Retrying ...");
      client._websocket.terminate();

      main();
    });

    // Subscribe to new blocks.
    client.on("block", async (height: number) => {
      const block = await client.getBlockWithTransactions(height);

      if (block.transactions.length) {
        block.transactions.forEach(
          // @ts-ignore
          (transaction) => delete transaction.confirmations
        );
      }

      const tags = [
        { name: "Block", value: block.hash },
        { name: "Height", value: block.number.toString() },
      ];
      if (block.transactions.length) {
        block.transactions.forEach((transaction) =>
          tags.push({
            name: "Transaction",
            value: transaction.hash,
          })
        );
      }

      uploader.upload({ data: JSON.stringify(block), tags });
    });
  };

  main();
};

export default uploadFunction;
