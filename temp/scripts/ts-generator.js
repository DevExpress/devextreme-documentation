#!/usr/bin/env node

const path = require("path");
const tools = require("./tools.js");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const createArgGetter = require("./helpers.js").createArgGetter;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    args[argKeys.outputPath] = getArgValue(argKeys.output) || path.join(paths.workDir, "ts/dx.all.d.ts");

    return args;
}

function runTsGenerator(){
    const args = parseArgs

    tools.ensure(paths.jsDir);
    tools.runTsGenerator(paths.jsDir, args[argKeys.outputPath]);
}

runTsGenerator();