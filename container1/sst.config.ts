import type { SSTConfig } from "sst";
import { SvelteKitSite, Cognito, Function, Api } from "sst/constructs";
import { Role } from "aws-cdk-lib/aws-iam";

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
        container: {
          cmd: ["mylambda.handler1"]
        }
      });

      const role = Role.fromRoleName(stack, "ImportedRole", "reads3record-role-3k3s1a9p");
      const lfunc2 = new Function(stack, "Function2", {
        handler: "packages/functions/src/python",
        url: true,
        role,
        runtime: "container",
        architecture: "arm_64",
        container: {
          cmd: ["mylambda.handler2"]
        }
      });

      stack.addOutputs({
        lfunc: lfunc.url,
        lfunc2: lfunc2.url,
      });
    
    });
  },
} satisfies SSTConfig;
