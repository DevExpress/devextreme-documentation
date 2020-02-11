---
id: CustomFileSystemProvider.Options.abortFileUpload
type: function()
---
---
##### shortDescription
A function that cancels the file upload.

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
