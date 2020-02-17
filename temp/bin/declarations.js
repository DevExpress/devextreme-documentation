"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Declarations {
    constructor() {
        this._docTagPacks = [];
    }
    get docTagPacks() {
        return this._docTagPacks;
    }
    addDocTagInfos(docTags, fileRelPath) {
        this._docTagPacks.push(formatDocTags(docTags.map(convertTagInfo), fileRelPath));
    }
    addDocTags(docTags, fileRelPath) {
        this._docTagPacks.push(formatDocTags(docTags.map(convertTag), fileRelPath));
    }
}
exports.Declarations = Declarations;
function convertTagInfo(tag) {
    return { name: tag.name, value: tag.text };
}
function convertTag(tag) {
    return { name: tag.tagName.text, value: tag.comment };
}
function formatDocTags(rawDocTags, fileRelPath) {
    const tags = {};
    const normalizedTags = [];
    for (let k = 0; k < rawDocTags.length; k += 1) {
        const tag = rawDocTags[k];
        if (tag.name === "name") // ignoring @name - internalName for declarations injection
            continue;
        if (tag.name === "" && k > 0) { // preserve @ that is a part of tag value
            const prevTag = normalizedTags[k - 1];
            prevTag.value = `${prevTag.value}@${tag.value}`;
            continue;
        }
        normalizedTags.push({
            name: convertName(tag.name),
            value: convertValue(tag.name, tag.value)
        });
    }
    for (const { name, value } of normalizedTags.sort((a, b) => a.name.localeCompare(b.name))) {
        if (!tags[name])
            tags[name] = [];
        tags[name].push(value);
    }
    if (tags["deprecated"]) {
        const emptyValueIndex = tags["deprecated"].indexOf("");
        if (emptyValueIndex >= 0)
            tags["deprecated"].splice(emptyValueIndex, 1);
    }
    if (tags["docid"] && tags["docid"].length > 1)
        throw new Error("Multiple docid values are not allowed: " + JSON.stringify(tags["docid"]));
    return {
        tags,
        location: {
            file: fileRelPath
        }
    };
}
function convertName(name) {
    if (name === "publicName")
        return "name";
    return name;
}
function convertValue(name, value) {
    if (name === "default")
        return value.replace(/\[(.+)\]\((.+)\)/, "@$1 $2");
    if (value === undefined || value === null)
        return "";
    return value;
}
//# sourceMappingURL=declarations.js.map