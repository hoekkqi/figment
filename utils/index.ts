import Logger from "./logger";
import { number, path } from "./generator";
import Database from "./database";
import Opcodes from "./opcodes";

export default {
  Logger,
  Opcodes,
  Random: {
    number,
    path,
  },
  Database,
};
