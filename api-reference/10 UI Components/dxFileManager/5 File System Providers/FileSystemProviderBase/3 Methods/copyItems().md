---
id: FileSystemProviderBase.copyItems()
---
---
##### shortDescription
Copies files or directories.

##### return: Array<Promise<any>>
An array of Promise objects. A promise at N index gets resolved after a file or directory with the same index is copied.
#include ref-promisedistinction

##### param(items): Array<FileSystemItem>
The current files or directories.

##### param(destinationDirectory): FileSystemItem
The directory where files or directories are copied to.

---
