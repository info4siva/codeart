/* eslint-disable @typescript-eslint/triple-slash-reference -- SST Ion requires triple-slash references */
/// <reference path="./.sst/platform/config.d.ts" />

import { StorageStack } from "./stacks/StorageStack";
import { SiteStack } from "./stacks/SiteStack";

export default $config({
  app(input) {
    return {
      name: "codeart",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: { region: "us-east-1" },
      },
    };
  },
  async run() {
    const { bucket, table } = StorageStack();
    SiteStack({ bucket, table });
  },
});
