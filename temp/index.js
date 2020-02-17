#!/usr/bin/env node

const shell = require("shelljs");
const path = require("path");

const tools = {
    "inject-descriptions": [ "collapser", "injector" ],
    "inject-descriptions-to-bundle": [ "injector-to-bundle" ],

    "generate-smd": [ "smd-generator" ],

	"discover-declarations": [ "discoverer" ],
	"discover-ts-declarations": [ "ts-discoverer" ],

    "generate-ts-bundle" : [ "ts-discoverer", "discoverer", "ts-generator" ],
    "update-ts-bundle": [ "ts-discoverer", "declaration-validator", "ts-generator" ],
    "update-ts": [ "ts-discoverer", "declaration-validator", "ts-generator" ],//Need to remove

    "update-meta": [ "ts-discoverer", "discoverer", "ng-smd-generator" ],
    "update-integration-meta": [ "ts-discoverer", "discoverer", "integration-data-generator" ],

    "update-topics": [ "ts-discoverer", "help-files-generator" ],
    "validate-declarations": [ "ts-discoverer", "declaration-validator" ],
    "generate-content-map": [ "content-map-creator" ],
    "update-links": [ "link-updater" ],
    "generate-smd-ng": [ "ts-discoverer", "discoverer", "ng-smd-generator" ]
};

const scripts = Object.keys(tools);

function start(){
    if(process.argv.length < 3) {
        console.log("Script is not specified");
        shell.exit(1);
    }

    var scriptName = process.argv[2];
    if(scripts.indexOf(scriptName) == -1) {
        console.log("Invalid script name. Use one of the following script:");
        scripts.forEach(script => {
            console.log("  ", script);
        })
        shell.exit(1);
    }

    tools[scriptName].forEach(toolName => {
        require(path.join(__dirname, "scripts", `${toolName}.js`));
    });

}

start();



