"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_helper_1 = require("./args-helper");
const discovering_1 = require("./discovering");
console.log(`workdir: ${process.cwd()}`);
const ARG_SCRIPTS = "js-scripts";
const ARG_OUTPUT = "output-path";
var args = args_helper_1.parseArgs(process.argv.slice(2));
if (args[ARG_SCRIPTS] === undefined)
    throw (`${ARG_SCRIPTS} arg missing`);
discovering_1.discover({
    scripts: args[ARG_SCRIPTS],
    output: args[ARG_OUTPUT] || "./out/ts-members-meta.json"
});
//# sourceMappingURL=index.js.map