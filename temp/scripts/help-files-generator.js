#!/usr/bin/env node

const path  = require("path");
const shell = require("shelljs");
const tools = require("./tools.js");
const paths = require("./helpers.js").paths;
const createArgGetter = require("./helpers.js").createArgGetter;
const stringifyArgs = require("./helpers.js").stringifyArgs;

const toolPath = path.join(paths.binDir, "DevExtreme.HelpFilesGenerator.dll");

const CODE_UPDATE_TOPICS_FAIL = 1;

function parseArgs() {
    const args = {};
    const getArgValue = createArgGetter(process.argv);

    args[argKeys.jsScripts] = getArgValue(argKeys.jsScripts) || paths.jsDir;
    args[argKeys.docsRoot] = getArgValue(argKeys.docsRoot) || paths.workDir;
    args[argKeys.artifacts] = getArgValue(argKeys.artifacts) || undefined;

    tools.ensure(args["js-scripts"]);
    tools.ensure(args["docs-root"]);

    return args;
}

function runHelpFilesGenerator(args) {
    let proc = shell.exec(`dotnet "${toolPath}" ${stringifyArgs(args)}`);
    
    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_UPDATE_TOPICS_FAIL);
    }

    console.log("Successful topics update");
}

runHelpFilesGenerator(parseArgs());
