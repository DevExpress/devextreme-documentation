---
id: FileSystemProviderBase.abortFileUpload()
---
---
##### shortDescription
Cancels the file upload.

##### return: Promise<any>
A Promise that is resolved after the file upload is aborted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(fileData): File
The file that is being uploaded.

##### param(uploadInfo): UploadInfo
Information about the file upload session.

##### param(destinationDirectory): FileSystemItem
The directory where a file system item is uploaded to.

---
