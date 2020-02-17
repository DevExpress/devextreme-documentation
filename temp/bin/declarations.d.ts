import { JSDocTagInfo, JSDocTag } from "typescript";
export declare type DocTagPack = {
    tags: Record<string, string[]>;
    location: {
        file: string;
    };
};
export interface DocTag {
    name: string;
    value: string;
}
export declare class Declarations {
    private readonly _docTagPacks;
    get docTagPacks(): readonly DocTagPack[];
    addDocTagInfos(docTags: readonly JSDocTagInfo[], fileRelPath: string): void;
    addDocTags(docTags: readonly JSDocTag[], fileRelPath: string): void;
}
