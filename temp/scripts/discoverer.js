#!/usr/bin/env node

const path  = require("path");
const shell = require("shelljs");
const tools = require("./tools.js");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const createArgGetter = require("./helpers.js").createArgGetter;
const stringifyArgs = require("./helpers.js").stringifyArgs;

const toolPath = path.join(paths.binDir, "DevExtreme.Declarations.Discoverer.dll");

const CODE_DISCOVERER_FAIL = 1;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    args[argKeys.jsScripts] = getArgValue(argKeys.jsScripts) || paths.jsDir;
    args[argKeys.docsRoot] = getArgValue(argKeys.docsRoot) || undefined;
    args[argKeys.artifacts] = getArgValue(argKeys.artifacts) || paths.artifactsDir;

    tools.ensure(args[argKeys.jsScripts]);
    tools.ensure(args["artifacts"]);

    return args;
};

function runDiscoverer(args) {
    let proc = shell.exec(`dotnet "${toolPath}" ${stringifyArgs(args)}`);

    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_DISCOVERER_FAIL);
    }
    console.log("Discoverer OK");
}

runDiscoverer(parseArgs());
