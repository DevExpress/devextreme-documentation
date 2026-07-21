let fs = require('fs');
let path = require('path');

const indentLevel = 0;

const spaceCount = (tabCount) => (indentLevel * 4 + tabCount * 4);
const generateTabs = (tabCount) => Array(spaceCount(tabCount)).fill(' ').join('');

const mainRegex = new RegExp(`class App extends React\\.Component \\{\\n {${spaceCount(2)}}render\\(\\) \\{\\n {${spaceCount(3)}}return \\(\\n((?:(?!return)[\\s\\S])+?) {${spaceCount(3)}}\\);\\n {${spaceCount(2)}}\\}\\n {${spaceCount(1)}}\\}`, 'gi')
const exportDefaultRegex = new RegExp(`(?<=${mainRegex.source})\\s+?export default App;`, 'gi')

const specifiedPath = process.argv[2];

function convertToFunctionComponent(match, body) {
    const dedentedBody = body.replace(/^ {4}/gm, '');
    return `export default function App() {\n${generateTabs(2)}return (\n${dedentedBody}${generateTabs(2)});\n${generateTabs(1)}}`;
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const separateExportDefaultProcessed = content.replace(exportDefaultRegex, '');
    const newContent = separateExportDefaultProcessed.replace(mainRegex, convertToFunctionComponent);
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            processFile(fullPath);
        }
    }
}

if (!specifiedPath) {
    console.error('Usage: node react-class-function.js <file-or-directory>[, <file-or-directory>, ...]');
    process.exit(1);
}

const specifiedPaths = specifiedPath.split(',').map((p) => p.trim()).filter(Boolean);

for (const currentPath of specifiedPaths) {
    const resolvedPath = path.resolve(currentPath);
    const stat = fs.statSync(resolvedPath);

    if (stat.isFile()) {
        processFile(resolvedPath);
    } else if (stat.isDirectory()) {
        processDirectory(resolvedPath);
    } else {
        console.error(`Specified path is invalid: ${currentPath}`);
        process.exit(1);
    }
}
