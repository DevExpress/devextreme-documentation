let fs = require('fs');
let path = require('path');

const mainRegex = /class App extends React\.Component \{\n {8}render\(\) \{\n {12}return \(\n((?:(?!return)[\s\S])+?) {12}\);\n {8}\}\n {4}\}/gi
const exportDefaultRegex = new RegExp(`(?<=${mainRegex.source})\\s+?export default App;`, 'gi')

const specifiedPath = process.argv[2];

function convertToFunctionComponent(match, body) {
    const dedentedBody = body.replace(/^ {4}/gm, '');
    return `export default function App() {\n        return (\n${dedentedBody}        );\n    }`;
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
