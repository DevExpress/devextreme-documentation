
import { execSync } from 'child_process';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, resolve as resolvePath } from 'path';

interface Renaming {
  oldName: string;
  newName: string;
}

const UTF8 = 'utf-8';

const targetDir = resolvePath(process.argv[2]);
const mapFilePath = resolvePath(process.argv[3]);

function extractName(uid: string): string {
  return uid.substring(uid.lastIndexOf(':') + 1);
}

function gitMove({ oldName, newName }: Renaming): void {
  execSync(`git mv "${oldName}" "${newName}"`);
}

function walkDirSync(path: string, callback: (f: string) => void) {

  for (const relPath of readdirSync(path)) {
    const absPath = resolvePath(path, relPath);

    if (statSync(absPath).isDirectory()) {
      walkDirSync(absPath, callback);
    } else {
      callback(absPath);
    }
  }
}

const map = Object.entries(require(mapFilePath) as Record<string, string>)
  .map(([oldUid, newUid]) => {
    const oldName = extractName(oldUid);
    const newName = extractName(newUid);
    
    return {
      derivedUid: {
        regex: new RegExp(`^(uid|type|inheritsType): *${oldUid}($|\\.)`, 'm'),
        replacement: `$1: ${newUid}`,
      },
      exactUid: {
        regex: new RegExp(`^uid: *${oldUid}$`, 'm'),
        renaming: { oldName, newName}
      },
    };
  });

const delayedRenamings: Renaming[] = [];

walkDirSync(targetDir, (filePath) => {
  const text = readFileSync(filePath, UTF8);
  let newText = text;
  let renaming: Renaming | undefined = undefined;
  
  map.forEach(({ derivedUid, exactUid }) => {
    if (exactUid.regex.test(newText)) {
      renaming = exactUid.renaming;
    }
    
    newText = newText.replace(derivedUid.regex, derivedUid.replacement);
  });
  
  if (newText !== text) {
    writeFileSync(filePath, newText, UTF8);
    
    if(renaming) {
      const { oldName, newName } = renaming;

      gitMove({
        oldName: filePath,
        newName: filePath.replace(new RegExp(`${oldName}.md$`), `/${newName}.md`),
      })

      const dirPath = dirname(filePath);
      delayedRenamings.push({
        oldName: dirPath,
        newName: dirPath.replace(new RegExp(`/${oldName}$`), `/${newName}`)
      });
    }
  }
});

delayedRenamings.forEach(gitMove);
