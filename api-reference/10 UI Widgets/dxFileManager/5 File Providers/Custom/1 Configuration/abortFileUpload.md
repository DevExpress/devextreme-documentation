---
id: CustomFileProvider.Options.abortFileUpload
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
            fileProvider: new DevExpress.fileProviders.Custom({             
                abortFileUpload: function(fileData, chunksInfo, destinationDir) { 
                    // Your code goes here
                },
                //...
            }) 
        });     
    });

---
