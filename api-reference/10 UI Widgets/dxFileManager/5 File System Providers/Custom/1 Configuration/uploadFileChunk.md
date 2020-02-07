---
id: CustomFileProvider.Options.uploadFileChunk
type: function()
---
---
##### shortDescription
A function that uploads a file in chunks.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                uploadFileChunk: function(fileData, chunksInfo, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });
    });

---
