import type { SSTConfig } from "sst";
import { SvelteKitSite, Cognito, Function, Api } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "container1",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {

      const lfunc = new Function(stack, "Function", {
        handler: "packages/functions/src/python",
        url: true,
        runtime: "container",
        architecture: "arm_64",
      });

      stack.addOutputs({
        lfunc: lfunc.url,
      });
    
    });
  },
} satisfies SSTConfig;
