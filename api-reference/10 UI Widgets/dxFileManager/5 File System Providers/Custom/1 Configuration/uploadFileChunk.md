---
id: CustomFileSystemProvider.Options.uploadFileChunk
type: function(file, uploadInfo)
---
---
##### shortDescription
A function that uploads a file in chunks.

##### param(file): File
<!-- Description goes here -->

##### param(uploadInfo): UploadInfo
<!-- Description goes here -->

##### return: Promise<any> | any
<!-- Description goes here -->

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
