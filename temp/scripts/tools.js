const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const helpers = require("./helpers.js");
const paths = helpers.paths;

const PATH_META = path.join(paths.binDir, "Declarations.json");

const PATH_DISCOVERER = path.join(paths.binDir, "DevExtreme.Declarations.Discoverer.dll");
const PATH_TS_GENERATOR = path.join(paths.binDir, "DevExtreme.TypeScriptGenerator.dll");
const PATH_VALIDATOR = path.join(paths.binDir, "DevExtreme.Declarations.IntegrityValidator.dll");

const CODE_JS_NOT_FOUND = 1;
const CODE_DISCOVERER_FAIL = 2;
const CODE_GENERATOR_FAIL = 3;
const CODE_VALIDATOR_FAIL = 2;

const discoverDocTags = require(path.join(paths.binDir, "discovering.js")).discover;

function ensure(jsPath) {
    if (!fs.existsSync(jsPath)) {
        shell.exit(CODE_JS_NOT_FOUND);
    }
}

function runTsDiscoverer(jsPath) {
    helpers.ensureDir(paths.artifactsDir);
    const tsMetaPath = path.join(paths.artifactsDir, "ts-members-meta.json");
    helpers.deleteFile(tsMetaPath);

    discoverDocTags({
        scripts: jsPath,
        output: tsMetaPath
    });
}

function runDiscoverer(jsPath) {

    helpers.deleteFile(PATH_META);

    var proc = shell.exec(`dotnet "${PATH_DISCOVERER}" --js-scripts="${jsPath}" --artifacts="${paths.artifactsDir}"`);
    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_DISCOVERER_FAIL);
    }
    console.log("Discoverer OK");
}

function runTsGenerator(jsPath, outputPath) {
    runDiscoverer(jsPath);
    const declarationsFile = path.join(paths.artifactsDir, "Declarations.json");

    var proc = shell.exec(`dotnet "${PATH_TS_GENERATOR}" --declarations-path="${declarationsFile}" --output-path="${outputPath}"`);
    if (proc.code !== 0) {
        console.log("Typescript generation failed");
        shell.exit(CODE_GENERATOR_FAIL);
    }
    console.log("TS Generator OK");
}

function runValidator(jsPath) {

    var proc = shell.exec(`dotnet "${PATH_VALIDATOR}" --js-scripts="${jsPath}" --artifacts="${paths.artifactsDir}"`);
    if (proc.code !== 0) {
        console.log(proc.stdout);
        console.log(proc.stderr);
        shell.exit(CODE_VALIDATOR_FAIL);
    }
}

module.exports = {
    ensure: ensure,
    runTsDiscoverer: runTsDiscoverer,
    runDiscoverer: runDiscoverer,
    runTsGenerator: runTsGenerator,
    runValidator: runValidator
}
