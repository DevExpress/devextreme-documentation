#!/usr/bin/env node

const shell = require("shelljs");
const helpers = require("./helpers.js");

const docPath = helpers.getWorkingDir();
const version = helpers.getPackageMajorVersion();

const toolPath = helpers.getPathToTools("DevExtreme.WebSite.ContentMapCreator");

function runContentMapCreator() {
    let docPathArg = `--docs-root=\"${docPath}\"`;
    let versionArg = `--version=\"${version}\"`;
    let args = `${docPathArg} ${versionArg}`;

    let proc = shell.exec(`dotnet "${toolPath}" ${args}`);
    
    if(proc.code !== 0){
        console.log("Content maps creation failed");
        shell.exit(proc.code);
    }
    console.log("Content maps created");
}

runContentMapCreator();