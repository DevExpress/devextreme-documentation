let fs = require('fs');
let path = require('path');

const specifiedPath = process.argv[2];
const linkRegex = /<a\b(?=[^>]*\btarget=["']_blank["'])[^>]*\bhref=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;

function isInsideTableCell(content, offset) {
    const before = content.slice(0, offset).toLowerCase();
    const after = content.slice(offset).toLowerCase();

    return before.lastIndexOf('<td') > before.lastIndexOf('</td>') && after.includes('</td>');
}

function escapeForRegex(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isInsideCodeSnippet(content, offset) {
    const lineStart = content.lastIndexOf('\n', offset - 1) + 1;
    const lineEndIndex = content.indexOf('\n', offset);
    const lineEnd = lineEndIndex === -1 ? content.length : lineEndIndex;
    const line = content.slice(lineStart, lineEnd);
    const indentMatch = line.match(/^[\t ]+(?=<a\b)/i);

    if (!indentMatch) {
        return false;
    }

    const indent = indentMatch[0];
    const commentRegex = new RegExp(`^${escapeForRegex(indent)}(?:<!--\s*tab:\s*index\.html\s*-->|<!--\s*HTML\s*-->)\s*$`, 'i');
    const linesAbove = content.slice(0, lineStart).split(/\r?\n/);

    for (let i = linesAbove.length - 1; i >= 0; i -= 1) {
        const currentLine = linesAbove[i];

        if (!currentLine.trim()) {
            continue;
        }

        if (commentRegex.test(currentLine)) {
            return true;
        }

        if (!currentLine.startsWith(indent)) {
            return false;
        }
    }

    return false;
}

function getFilePaths(targetPath) {
    const stats = fs.statSync(targetPath);

    if (stats.isFile()) {
        return [targetPath];
    }

    if (!stats.isDirectory()) {
        return [];
    }

    return fs.readdirSync(targetPath, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(targetPath, entry.name);

        if (entry.isDirectory()) {
            return getFilePaths(entryPath);
        }

        return entry.isFile() ? [entryPath] : [];
    });
}

function convertFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const updatedContent = content.replace(linkRegex, (match, href, innerHtml, offset) => {
        if (isInsideTableCell(content, offset) || isInsideCodeSnippet(content, offset)) {
            return match;
        }

        return `[${innerHtml}](${href})`;
    });

    if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        return true;
    }

    return false;
}

if (!specifiedPath) {
    console.error('Specify a file or directory path.');
    process.exit(1);
}

try {
    const filePaths = getFilePaths(specifiedPath);
    let updatedFilesCount = 0;

    filePaths.forEach((filePath) => {
        if (convertFile(filePath)) {
            updatedFilesCount += 1;
        }
    });

    console.log(`Processed ${filePaths.length} file(s). Updated ${updatedFilesCount} file(s).`);
} catch (error) {
    console.error(error.message || error);
    process.exit(1);
}
