---
id: CustomFileSystemProvider.Options.abortFileUpload
type: function(file, uploadInfo?)
---
---
##### shortDescription
A function that cancels the file upload.

##### param(file): File
<!-- Description goes here -->

##### param(uploadInfo?): UploadInfo
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
                abortFileUpload: function(fileData, chunksInfo, destinationDir) { 
                    // Your code goes here
                },
                //...
            }) 
        });     
    });

---
