---
id: FileSystemProviderBase.moveItems()
---
---
##### shortDescription
Moves files and directories.

##### return: Array<Promise<any>>
An array of Promise objects. A promise at N index gets resolved after a file or directory with the same index is moved.
#include ref-promisedistinction

##### param(items): Array<FileSystemItem>
The current files and directories.

##### param(destinationDirectory): FileSystemItem
The directory where files or directories are moved to.

---
