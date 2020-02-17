import { ExportSpecifier, JSDocTag, TypeChecker, ExportAssignment, JSDocTagInfo, VariableDeclaration, Declaration, ClassDeclaration, InterfaceDeclaration, Symbol, FunctionDeclaration, TypeAliasDeclaration } from "typescript";
export declare function getClassOrInterfaceTags(checker: TypeChecker, declaration: ClassDeclaration | InterfaceDeclaration, targetDIr: string): {
    fileRelPath: string;
    tags: JSDocTagInfo[];
}[];
export declare function getSymbolMeta(symbol: Symbol): {
    tags: JSDocTagInfo[] | undefined;
    declarations: Declaration[];
};
export declare function getExportSpecifierTags(declaration: ExportSpecifier): ReadonlyArray<JSDocTag>;
declare type TagsByFileCollection = {
    fileRelPath?: string;
    tags: JSDocTagInfo[];
}[];
export declare function getExportAssignmentTags(checker: TypeChecker, declaration: ExportAssignment, targetDir: string): TagsByFileCollection | undefined;
export declare function getFunctionDeclarationTags(checker: TypeChecker, declaration: FunctionDeclaration): JSDocTagInfo[];
export declare function getVariableDeclarationTags(checker: TypeChecker, declaration: VariableDeclaration): JSDocTagInfo[][] | undefined;
export declare function getTypeAliasDeclarationTags(checker: TypeChecker, typeDeclaration: TypeAliasDeclaration, targetDir: string): TagsByFileCollection | undefined;
export {};
