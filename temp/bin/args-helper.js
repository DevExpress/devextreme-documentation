"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseArgs(rawArgs) {
    const result = {};
    for (var raw of rawArgs) {
        if (!raw.startsWith(PREFIX))
            continue;
        const [key, value] = raw.substr(PREFIX.length).split("=");
        if (!key || !value)
            continue;
        result[key] = value;
    }
    return result;
}
exports.parseArgs = parseArgs;
const PREFIX = "--";
//# sourceMappingURL=args-helper.js.map