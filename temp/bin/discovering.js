"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const typescript_1 = __importStar(require("typescript"));
const utils_1 = require("./utils");
const declarations_1 = require("./declarations");
const processing_1 = require("./processing");
function discover(paths) {
    const hrStart = process.hrtime();
    const targetDir = paths.scripts;
    const outputFile = paths.output;
    const fileNames = [];
    utils_1.walkDirSync(targetDir, f => f.endsWith(".d.ts") && fileNames.push(f));
    console.log(`${fileNames.length} files discovered`);
    const declarations = parseFiles(fileNames);
    var normalizedResult = declarations.docTagPacks
        .filter(e => Object.keys(e.tags).length > 0)
        .filter(e => e.tags["docid"] || e.tags["const"] || e.tags["pseudo"])
        .sort(compareDocEntries);
    console.log(`${normalizedResult.length} docTagPacks discovered`);
    fs_1.writeFileSync(outputFile, JSON.stringify(normalizedResult, null, 2));
    const [ellapsedS, ellapsedMs] = process.hrtime(hrStart);
    console.log(`Done in ${ellapsedS}s ${ellapsedMs / 1000000}ms`);
    function parseFiles(files) {
        const program = typescript_1.default.createProgram(files, {});
        const declarations = new declarations_1.Declarations();
        files.forEach(filePath => {
            processFile(program, filePath);
        });
        function processFile(program, filePath) {
            const sourceFile = program.getSourceFile(filePath);
            const checker = program.getTypeChecker();
            if (sourceFile.text.length === 0)
                throw new Error("Empty file: " + filePath);
            const fileSymbol = checker.getSymbolAtLocation(sourceFile);
            if (!fileSymbol) {
                return;
            }
            const exportedMembers = checker.getExportsOfModule(fileSymbol);
            for (const member of exportedMembers) {
                const fileRelPath = path_1.relative(targetDir, sourceFile.fileName);
                const { declarations: memberDeclarations, tags: memberTags } = processing_1.getSymbolMeta(member);
                if (memberTags != undefined)
                    declarations.addDocTagInfos(memberTags, fileRelPath);
                for (const declaration of memberDeclarations) {
                    switch (declaration.kind) {
                        case typescript_1.SyntaxKind.ClassDeclaration:
                            for (const tagPack of processing_1.getClassOrInterfaceTags(checker, declaration, targetDir))
                                addDocTagInfos(tagPack.tags, tagPack.fileRelPath);
                            break;
                        case typescript_1.SyntaxKind.InterfaceDeclaration:
                            for (const tagPack of processing_1.getClassOrInterfaceTags(checker, declaration, targetDir))
                                addDocTagInfos(tagPack.tags, tagPack.fileRelPath);
                            break;
                        case typescript_1.SyntaxKind.FunctionDeclaration:
                            addDocTagInfos(processing_1.getFunctionDeclarationTags(checker, declaration), fileRelPath);
                            break;
                        case typescript_1.SyntaxKind.VariableDeclaration: {
                            const tagPacks = processing_1.getVariableDeclarationTags(checker, declaration);
                            if (tagPacks === undefined)
                                break;
                            for (const tagPack of processing_1.getVariableDeclarationTags(checker, declaration))
                                declarations.addDocTagInfos(tagPack, fileRelPath);
                            break;
                        }
                        case typescript_1.SyntaxKind.ExportAssignment:
                            for (const tagPack of processing_1.getExportAssignmentTags(checker, declaration, targetDir))
                                addDocTagInfos(tagPack.tags, tagPack.fileRelPath || fileRelPath);
                            break;
                        case typescript_1.SyntaxKind.ExportSpecifier:
                            addDocTags(processing_1.getExportSpecifierTags(declaration), fileRelPath);
                            break;
                        case typescript_1.SyntaxKind.TypeAliasDeclaration: {
                            const tagPacks = processing_1.getTypeAliasDeclarationTags(checker, declaration, targetDir);
                            if (tagPacks !== undefined) {
                                for (const tagPack of tagPacks)
                                    addDocTagInfos(tagPack.tags, tagPack.fileRelPath || fileRelPath);
                            }
                            break;
                        }
                        default:
                            throw new Error(`Unknown SyntaxKind: ${declaration.kind}\n` +
                                declaration.getText() +
                                `\n` +
                                `${declaration.getSourceFile().fileName}\n`);
                    }
                }
            }
            function addDocTagInfos(tags, fileRelPath) {
                if (tags !== undefined)
                    declarations.addDocTagInfos(tags, fileRelPath);
            }
            function addDocTags(tags, fileRelPath) {
                if (tags !== undefined)
                    declarations.addDocTags(tags, fileRelPath);
            }
        }
        return declarations;
    }
}
exports.discover = discover;
function compareDocEntries(a, b) {
    const result = compareAttrValues(getNameForComparison(a), getNameForComparison(b));
    return result !== 0 ? result : compareAttrValues(a.tags["name"], b.tags["name"]);
}
function getNameForComparison(doc) {
    return doc.tags["const"] || doc.tags["pseudo"] || doc.tags["docid"];
}
function compareAttrValues(a, b) {
    if (a === undefined && b === undefined)
        return 0;
    if (a === undefined)
        return -1;
    if (b === undefined)
        return 1;
    return a[0].localeCompare(b[0]);
}
//# sourceMappingURL=discovering.js.map