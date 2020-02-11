---
id: CustomFileSystemProvider.Options.createDirectory
type: function()
---
---
##### shortDescription
A function that creates a folder.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                createDirectory: function(parentDir, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
