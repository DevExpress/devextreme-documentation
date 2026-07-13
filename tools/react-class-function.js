let fs = require('fs');
let path = require('path');

const mainRegex = /class App extends React\.Component \{\n {8}render\(\) \{\n {12}return \(\n([\s\S]+?) {12}\);\n {8}\}\n {4}\}/gi
const exportDefaultRegex = /\n\s+?export default App;/gi

const specifiedPath = process.argv[2];

function convertToFunctionComponent(match, body) {
    const dedentedBody = body.replace(/^ {4}/gm, '');
    return `function App() {\n        return (\n${dedentedBody}        );\n    }`;
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(mainRegex, convertToFunctionComponent);
    if (newContent !== content) {
        const finalContent = newContent.replace(exportDefaultRegex, '');
        fs.writeFileSync(filePath, finalContent, 'utf8');
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
    console.error('Usage: node react-class-function.js <file-or-directory>');
    process.exit(1);
}

const resolvedPath = path.resolve(specifiedPath);
const stat = fs.statSync(resolvedPath);

if (stat.isFile()) {
    processFile(resolvedPath);
} else if (stat.isDirectory()) {
    processDirectory(resolvedPath);
} else {
    console.error('Specified path is invalid.');
    process.exit(1);
}
