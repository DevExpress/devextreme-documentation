---
id: FileSystemProviderBase.deleteItems()
---
---
##### shortDescription
Deletes files or directories.

##### return: Array<Promise<any>>
An array of Promise objects. A promise at N index gets resolved after a file or directory with the same index is deleted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(items): Array<FileSystemItem>
The current files or directories.

---
