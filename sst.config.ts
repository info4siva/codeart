import {SSTConfig} from "sst";
import {Site} from "./stacks/SiteStack";
import {StorageStack} from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "codeart",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack);
    app.stack(Site);
  },
} as SSTConfig;
