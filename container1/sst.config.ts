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

      let dbKey = "Database Key";
      const lfunc = new Function(stack, "Function", {
        handler: "packages/functions/src/python/mylambda1.handler",
        url: true,
        runtime: "container",
        environment: {
          DB_KEY: dbKey,
        },
      });

      stack.addOutputs({
        lfunc: lfunc.url,
      });
    
    });
  },
} satisfies SSTConfig;
