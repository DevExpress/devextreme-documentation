---
id: CustomFileSystemProvider.Options.moveItem
type: function()
---
---
##### shortDescription
A function that moves files and folders.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                moveItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });
---
