const fs = require("fs");
const path = require("path");

function getWorkingDir() {
    return process.cwd();
}
function getPackageInfo() {
    const workingDir = getWorkingDir();
    return require(path.join(workingDir, "package.json"));
}
function getPackageMajorVersion() {
    const packageInfo = getPackageInfo();
    if(!packageInfo)
        return null;
    else
        return packageInfo.version.substring(0, "XX.X".length);
}
function getBinPath() {
    return path.join(__dirname, "../bin");
}

function deleteFile(path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}

function ensureDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function getAllPaths() {
    const workDir = getWorkingDir();
    const binDir = getBinPath();

    return {
        workDir: workDir,
        jsDir: path.join(workDir, "js"),
        artifactsDir: path.join(workDir, "artifacts", "internal-tools"),
        binDir: binDir
    };
}

function createArgGetter(args) {
    return function (name) {
        const prefix = `--${name}=`;
        let arg = args.filter(a => a.startsWith(prefix))[0];

        return arg && arg.substring(prefix.length) || undefined;
    }
}

function stringifyArgs(args) {
    return Object.keys(args)
        .filter(argName => args[argName])// if arg value is empty, skip it
        .map(argName => `--${argName}=${args[argName]}`)
        .join(' ');
}

function getPathToTools(toolsName){
    return path.join(getBinPath(), `${toolsName}.dll`)
}

module.exports = {
    createArgGetter: createArgGetter,
    deleteFile: deleteFile,
    getWorkingDir: getWorkingDir,
    getPackageInfo: getPackageInfo,
    getPackageMajorVersion: getPackageMajorVersion,
    getBinPath: getBinPath,
    getPathToTools: getPathToTools,
	ensureDir: ensureDir,
    paths: getAllPaths(),
    stringifyArgs: stringifyArgs
}