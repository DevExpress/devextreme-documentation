#!/usr/bin/env node

const path  = require("path");
const shell = require("shelljs");
const tools = require("./tools.js");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const createArgGetter = require("./helpers.js").createArgGetter;
const stringifyArgs = require("./helpers.js").stringifyArgs;

const toolPath = path.join(paths.binDir, "DevExtreme.Descriptions.Injector.dll");

const CODE_INJECTOR_FAIL = 1;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    args[argKeys.declarationsPath] = getArgValue(argKeys.declarationsPath) || path.join(paths.artifactsDir, "Declarations.json");
    args[argKeys.targetPath] = getArgValue(argKeys.targetPath) || path.join(paths.binDir, "dx.all.d.ts");
    args[argKeys.jsScripts] = getArgValue(argKeys.jsScripts) || paths.jsDir;
    args[argKeys.searchPattern] = getArgValue(argKeys.searchPattern) || "*"
    args[argKeys.outputPath] = getArgValue(argKeys.outputPath) || args[argKeys.targetPath];

    tools.ensure(args[argKeys.jsScripts]);

    return args;
};

function runInjectorToBundle(args) {
    let proc = shell.exec(`dotnet "${toolPath}" ${stringifyArgs(args)}`);

    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_INJECTOR_FAIL);
    }
    console.log("Injector OK");
}

runInjectorToBundle(parseArgs());
