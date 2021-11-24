import KYVE from "@kyve/core";
import { version } from "../package.json";
import uploadFunction from "./upload";
import validateFunction from "./validate";

process.env.KYVE_RUNTIME = "@kyve/celo";
process.env.KYVE_VERSION = version;

(async () => {
  const { node } = await KYVE.generate();
  node.run(uploadFunction, validateFunction);
})();
