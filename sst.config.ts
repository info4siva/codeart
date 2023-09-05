import { AstroSite } from "sst/constructs";
import {SSTConfig} from "sst";

export default {
  config(_input) {
    return {
      name: "codeart",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site");
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} as SSTConfig;
