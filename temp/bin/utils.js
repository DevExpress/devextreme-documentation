"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function walkDirSync(rootDir, callback) {
    const remained = [rootDir];
    while (remained.length > 0) {
        const currentDir = remained.shift();
        for (const fileRelPath of fs_1.readdirSync(currentDir)) {
            const fileAbsPath = path_1.join(currentDir, fileRelPath);
            if (fs_1.statSync(fileAbsPath).isDirectory()) {
                remained.push(fileAbsPath);
                continue;
            }
            callback(fileAbsPath);
        }
    }
}
exports.walkDirSync = walkDirSync;
//# sourceMappingURL=utils.js.map