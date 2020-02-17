const fs = require('fs');
const path = require('path');

const docPath = process.cwd();
const linkRegex = /\[[^\]]+?\]\((?<link>.*?)?(?!\)\.md)\)/g;

let brokenLinks = {};

function checkLink(link) {
    if(link.startsWith('/api-reference') || link.startsWith('/concepts')) {
        let filePath = docPath + link.replace(/%20/g, " ").replace(/%2C/g, ",").replace(/\//g, "\\");
        if(!fs.existsSync(filePath)){
            return 1;
        }
    }
}

function readDirSync(pathDir) {
    let list = [];
    let files = fs.readdirSync(pathDir);
  
    files.forEach(function (file) {
        let stats = fs.lstatSync(path.join(pathDir, file));
        if(stats.isDirectory()) {
            list = list.concat(readDirSync(path.join(pathDir, file)));
        } else {
            list.push(path.join(pathDir, file));
        }
    });
  
    return list;
}

function checkAllFiles() {
    readDirSync(`${docPath}\\api-reference`).forEach(file => checkFile(file));
    readDirSync(`${docPath}\\concepts`).forEach(file => checkFile(file));
}

function checkFile(path) {
    let data = fs.readFileSync(path, 'utf8');

    let result;
    while((result = linkRegex.exec(data)) !== null) {
        let link = result.groups.link;
        let splitLink = link.indexOf('\'');
        if(splitLink.length < 0) continue;

        let siteLink = link.split('\'')[0].trim();
        if(checkLink(siteLink) === 1){
            if (path in brokenLinks) {
                let out = brokenLinks[path];
                brokenLinks[path] = `${out}\n  ${link}`;
            } else {
                brokenLinks[path] = `  ${link}`;
            }
        }
    }
}

function writeLog() {
    for(let path in brokenLinks){
        let value = brokenLinks[path];
        console.log(`Path: ${path}`);
        console.log(`Broken links:\n${value}\n`)
    }
}

function runLinkValidator() {
    checkAllFiles();
    writeLog();
}

runLinkValidator();