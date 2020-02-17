"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const typescript_1 = require("typescript");
const visitedSymbols = new Set();
function getClassOrInterfaceTags(checker, declaration, targetDIr) {
    const type = checker.getTypeAtLocation(declaration);
    const symbol = type.getSymbol();
    if (symbol === undefined)
        throw new Error(`Unable to get symbol for '${symbol.name}'`);
    const nestedSymbols = [...type.getProperties(), ...getStaticMethods(symbol)];
    const result = [];
    for (const propSymbol of nestedSymbols) {
        const fqName = checker.getFullyQualifiedName(propSymbol);
        if (visitedSymbols.has(fqName))
            continue;
        else
            visitedSymbols.add(fqName);
        let isMethodSignature;
        for (const propDeclaration of propSymbol.declarations) {
            const fileRelPath = path_1.relative(targetDIr, propDeclaration.getSourceFile().fileName);
            isMethodSignature = false;
            if (isMethod(propDeclaration)) {
                isMethodSignature = true;
                result.push({
                    tags: getMethodTags(checker, propDeclaration),
                    fileRelPath
                });
            }
        }
        if (isMethodSignature)
            continue;
        if (propSymbol.declarations.length !== 1)
            throw new Error("Property expected to have one and only one declaration");
        result.push({
            tags: propSymbol.getJsDocTags(),
            fileRelPath: path_1.relative(targetDIr, propSymbol.declarations[0].getSourceFile().fileName)
        });
    }
    return result;
}
exports.getClassOrInterfaceTags = getClassOrInterfaceTags;
function getSymbolMeta(symbol) {
    const declarations = symbol.getDeclarations();
    const tags = symbol.getJsDocTags();
    if ((!declarations || declarations.length < 2) && tags && tags.length > 0) {
        return { declarations, tags };
    }
    else {
        return { declarations, tags: undefined };
    }
}
exports.getSymbolMeta = getSymbolMeta;
function getStaticMethods(symbol) {
    const result = [];
    if (!symbol.exports)
        return result;
    symbol.exports.forEach((s, k) => {
        if (k === "prototype")
            return;
        result.push(s);
    });
    return result;
}
function getExportSpecifierTags(declaration) {
    const adjacentExportSpecifiers = getAdjacentExportSpecifiers(declaration);
    const isSingleExport = adjacentExportSpecifiers && adjacentExportSpecifiers.length === 1;
    if (!isSingleExport)
        return;
    return typescript_1.getJSDocTags(declaration.parent.parent);
}
exports.getExportSpecifierTags = getExportSpecifierTags;
function getAdjacentExportSpecifiers(node) {
    if (!node.parent)
        return undefined;
    const exportsListNodes = node.parent
        .getChildren()
        .filter(n => n.kind === typescript_1.SyntaxKind.SyntaxList);
    if (exportsListNodes.length !== 1)
        return undefined;
    return exportsListNodes[0]
        .getChildren()
        .filter(n => n.kind === typescript_1.SyntaxKind.ExportSpecifier);
}
function getExportAssignmentTags(checker, declaration, targetDir) {
    if (declaration.expression.kind !== typescript_1.SyntaxKind.Identifier)
        return undefined;
    const result = [];
    const declarationSymbol = checker.getSymbolAtLocation(declaration.expression);
    if (declarationSymbol) {
        const { tags: memberTags } = getSymbolMeta(declarationSymbol);
        if (memberTags != undefined)
            result.push({ tags: memberTags });
    }
    result.push(...getTypeTags(checker.getTypeAtLocation(declaration.expression), checker, declaration.getSourceFile().fileName, targetDir));
    return result;
}
exports.getExportAssignmentTags = getExportAssignmentTags;
function getTypeTags(type, checker, targetFileName, targetDir) {
    const result = [];
    const typeSymbol = type.getSymbol();
    if (typeSymbol === undefined)
        return undefined;
    const { tags: memberTags } = getSymbolMeta(typeSymbol);
    if (memberTags != undefined)
        result.push({ tags: memberTags });
    const typeDeclarations = typeSymbol.getDeclarations();
    if (!typeDeclarations)
        return result;
    for (const declaration of typeDeclarations) {
        if (targetFileName !== declaration.getSourceFile().fileName) {
            continue;
        }
        switch (declaration.kind) {
            case typescript_1.SyntaxKind.FunctionType:
                break;
            case typescript_1.SyntaxKind.TypeLiteral:
                result.push(...getTypeLiteralTags(checker, declaration).map(tags => ({ tags })));
                break;
            case typescript_1.SyntaxKind.ClassDeclaration:
            case typescript_1.SyntaxKind.InterfaceDeclaration:
                result.push(...getClassOrInterfaceTags(checker, declaration, targetDir));
                break;
            case typescript_1.SyntaxKind.FunctionDeclaration:
                result.push({ tags: getFunctionDeclarationTags(checker, declaration) });
                break;
            default:
                console.log(`Unexpected export assignment kind: ${declaration.kind}\n${declaration.getText()}`);
        }
    }
    return result;
}
function getFunctionDeclarationTags(checker, declaration) {
    return checker.getSignatureFromDeclaration(declaration).getJsDocTags();
}
exports.getFunctionDeclarationTags = getFunctionDeclarationTags;
function getVariableDeclarationTags(checker, declaration) {
    if (declaration.type.kind !== typescript_1.SyntaxKind.TypeLiteral)
        return;
    return getTypeLiteralTags(checker, declaration.type);
}
exports.getVariableDeclarationTags = getVariableDeclarationTags;
function getTypeAliasDeclarationTags(checker, typeDeclaration, targetDir) {
    return getTypeTags(checker.getTypeAtLocation(typeDeclaration.type), checker, typeDeclaration.getSourceFile().fileName, targetDir);
}
exports.getTypeAliasDeclarationTags = getTypeAliasDeclarationTags;
function getTypeLiteralTags(checker, typeLiteral) {
    if (!typeLiteral.members)
        return;
    const result = [];
    for (var typeElement of typeLiteral.members) {
        if (isMethod(typeElement)) {
            result.push(getMethodTags(checker, typeElement));
        }
    }
    return result;
}
function isMethod(declaration) {
    return declaration.kind === typescript_1.SyntaxKind.MethodSignature || declaration.kind === typescript_1.SyntaxKind.MethodDeclaration;
}
function getMethodTags(checker, declaration) {
    const signature = checker.getSignatureFromDeclaration(declaration);
    return signature.getJsDocTags();
}
//# sourceMappingURL=processing.js.map