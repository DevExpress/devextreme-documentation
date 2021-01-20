---
id: CustomFileSystemProvider.Options.uploadFileChunk
type: function(file, uploadInfo, destinationDirectory)
---
---
##### shortDescription
A function that uploads a file in chunks.

##### param(file): File
The file that is being uploaded.

##### param(uploadInfo): UploadInfo
Information about the file upload session.

##### param(destinationDirectory): FileSystemItem
The directory where a file system item is uploaded to.

##### return: Promise<any> | any
A Promise that is resolved after the file system item is uploaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                uploadFileChunk: function(fileData, chunksInfo, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });
    });

---
