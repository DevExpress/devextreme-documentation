---
id: CustomFileSystemProvider.Options.renameItem
type: function()
---
---
##### shortDescription
A function that renames files and folders.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                renameItem: function(item, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });
    });
---
