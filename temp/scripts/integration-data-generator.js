#!/usr/bin/env node

const path  = require("path");
const shell = require("shelljs");
const tools = require("./tools.js");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const stringifyArgs = require("./helpers.js").stringifyArgs;
const createArgGetter = require("./helpers.js").createArgGetter;

const toolPath = path.join(paths.binDir, "DevExtreme.IntegrationDataGenerator.dll");

const CODE_INTEGRATION_DATA_GENERATOR_FAIL = 1;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    args[argKeys.declarationsPath] = getArgValue(argKeys.declarationsPath) || path.join(paths.artifactsDir, "Declarations.json");
    args[argKeys.outputPath] = getArgValue(argKeys.output) || path.join(paths.artifactsDir, "integration-data.json");

    return args;
}

function runIntegrationDataGenerator(args) {
    let proc = shell.exec(`dotnet "${toolPath}" ${stringifyArgs(args)}`);

    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_INTEGRATION_DATA_GENERATOR_FAIL);
    }
    console.log("Integration data generator OK");
}

runIntegrationDataGenerator(parseArgs());
