#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { App } from "aws-cdk-lib";

import { RemindMeStack } from "../lib/remind-me-stack"; // Adjust the import path

const app = new App();
new RemindMeStack(app, "RemindMeStack", {
  env: {
    account: "810444371782",
    region: "us-east-1", // or the desired region
  },
});
