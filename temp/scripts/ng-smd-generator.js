#!/usr/bin/env node

const path  = require("path");
const shell = require("shelljs");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const createArgGetter = require("./helpers.js").createArgGetter;
const stringifyArgs = require("./helpers.js").stringifyArgs;

const toolPath = path.join(paths.binDir, "DevExtreme.NgSmdGenerator.dll");

const CODE_NG_SMD_GENERATOR_FAIL = 1;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    const version = getArgValue("version");
    if (version === undefined){
        throw new Error("version arg is missing");
    }

    args[argKeys.outputPath] = getArgValue(argKeys.output) || path.join(paths.artifactsDir, "NGMetaData.json");
    args[argKeys.declarationsPath] = getArgValue(argKeys.declarationsPath) || path.join(paths.artifactsDir, "Declarations.json");
    args[argKeys.enumsJsonPath] = path.join(paths.binDir, `Enums_${version}.json`);

    return args;
}

function runNgSmdGenerator(args) {
    let proc = shell.exec(`dotnet "${toolPath}" ${stringifyArgs(args)}`);
    
    if(proc.code !== 0) {
        console.log("NG SMD generator failed");
        shell.exit(CODE_NG_SMD_GENERATOR_FAIL);
    }

    console.log("Successful NG SMD generator");
}

runNgSmdGenerator(parseArgs());
