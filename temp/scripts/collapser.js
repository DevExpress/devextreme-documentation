#!/usr/bin/env node

const path  = require("path");
const shell = require("shelljs");
const tools = require("./tools.js");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const createArgGetter = require("./helpers.js").createArgGetter;
const stringifyArgs = require("./helpers.js").stringifyArgs;

const toolPath = path.join(paths.binDir, "DevExtreme.Declarations.Collapser.dll");

const CODE_COLLAPSER_FAIL = 1;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    args[argKeys.jsScripts] = getArgValue(argKeys.jsScripts) || paths.jsDir;

    tools.ensure(args[argKeys.jsScripts]);

    return args;
}

function runCollapser(args) {
    let proc = shell.exec(`dotnet "${toolPath}" ${stringifyArgs(args)}`);
    
    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_COLLAPSER_FAIL);
    }
    console.log("Collapser OK");
}

runCollapser(parseArgs());
