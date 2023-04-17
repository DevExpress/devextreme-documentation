import * as fs from 'fs';
import * as path from 'path';

function updateFileContent(filePath: string, oldFolderName: string, newFolderName: string): void {
  const content = fs.readFileSync(filePath, 'utf8');
  const idRegExp = new RegExp(`(id: ${oldFolderName})(.*)(\n)`, 'g');
  const updatedContent = content.replace(idRegExp, `id: ${newFolderName}$2$3`);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

function updateFolderAndFiles(folderPath: string, oldFolderName: string, newFolderName: string): void {
  const newFolderPath = path.join(path.dirname(folderPath), newFolderName);

  fs.renameSync(folderPath, newFolderPath);
  processFilesInFolder(newFolderPath, oldFolderName, newFolderName);
}

function processFilesInFolder(currentPath: string, oldFolderName: string, newFolderName: string): void {
  const files = fs.readdirSync(currentPath);

  for (const file of files) {
    const filePath = path.join(currentPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processFilesInFolder(filePath, oldFolderName, newFolderName);
    } else {
      const fileExtension = path.extname(file);
      const fileName = path.basename(file, fileExtension);

      if (fileExtension === '.md') {
        updateFileContent(filePath, oldFolderName, newFolderName);

        if (fileName === oldFolderName) {
          const newFileName = `${newFolderName}${fileExtension}`;
          const newFilePath = path.join(currentPath, newFileName);
          fs.renameSync(filePath, newFilePath);
        }
      }
    }
  }
}

function findAndUpdateFolder(startPath: string, targetFolder: string, newFolderName: string): void {
  if (!fs.existsSync(startPath)) {
    console.error('Path not found:', startPath);
    return;
  }

  const files = fs.readdirSync(startPath);

  for (const file of files) {
    const filePath = path.join(startPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file === targetFolder) {
        updateFolderAndFiles(filePath, targetFolder, newFolderName);
      } else {
        findAndUpdateFolder(filePath, targetFolder, newFolderName);
      }
    }
  }
}

const apiReferencePath = path.join(__dirname, '..', 'api-reference');
const oldFolderName = process.argv[2];
const newFolderName = process.argv[3];

if (!oldFolderName || !newFolderName) {
  console.error('Please provide old and new folder names as arguments.');
  process.exit(1);
}

findAndUpdateFolder(apiReferencePath, oldFolderName, newFolderName);