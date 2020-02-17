#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const argKeys = require("./const.js");
const paths = require("./helpers.js").paths;
const stringifyArgs = require("./helpers.js").stringifyArgs;

const checkAll = process.argv.indexOf("--check-all") > -1;
const failOnChange = process.argv.indexOf("--fail-on-change") > -1;
const validation = process.argv.indexOf("--validation") > -1;

const linksConverterPath = path.join(paths.binDir, "DevExtreme.WebSite.LinksConverter.dll");

const CHANGES_FILE_PATH = path.join(paths.binDir, "staged_changes.txt");

const CODE_LINK_UPDATER_FAIL = 1;
const CODE_LINKS_UPDATED = 2;
const CODE_VALIDATION_ERROR = 3;

function parseArgs(stagedFilesExist) {
    const args = {};

    args[argKeys.docsRoot] = paths.workDir;
    args[argKeys.contentMapPath] = paths.workDir;
    args[argKeys.listFiles] = stagedFilesExist ? CHANGES_FILE_PATH : undefined;
    args[argKeys.failOnChange] = failOnChange ? "true" : "false";
    args[argKeys.validation] == validation ? "true" : "false";

    return args;
}

function runLinksConverter(args) {
    let proc = shell.exec(`dotnet "${linksConverterPath}" ${stringifyArgs(args)}`);
    
    if(proc.code === 200){
        console.log("VALIDATION ERROR!");
        console.log("Links in some staged files lead to a nonexistent topic. Please review links and fix them.");
        shell.exit(CODE_VALIDATION_ERROR);
    }
    else if(proc.code === 100){
        console.log("REVIEW CHANGES!");
        console.log("Links in some staged files were updated. Please review changes and add them to the commit.");
        shell.exit(CODE_LINKS_UPDATED);
    } else if(proc.code !== 0) {
        console.log("Links converter failed");
        shell.exit(CODE_LINK_UPDATER_FAIL);
    }

    console.log("All links are up to date");
}

function SaveStagedFilesToFile(){
    let outputConsole = shell.exec(`git status --short | findstr "^M ^A"`, { silent: true });
    if (outputConsole.code !== 0){
        console.log("Error get git status");
        shell.exit(outputConsole.code);
    }

    if(outputConsole.length){
        const files = outputConsole.stdout.replace(/^.\ +"?(?<file>[^\"]*)"?$/gm, "$1");

        fs.writeFileSync(CHANGES_FILE_PATH, files, err => {
            if(err) console.log(err);
            console.log(`${CHANGES_FILE_PATH} saved`);
        })
        return true;
    }
    return false;
}

const stagedFilesExist = SaveStagedFilesToFile();
if(!stagedFilesExist && !checkAll) {
    console.log("No staged changes found");
    return;
}

runLinksConverter(parseArgs(stagedFilesExist));
