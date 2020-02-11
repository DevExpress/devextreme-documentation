---
id: CustomFileSystemProvider.Options.deleteItem
type: function()
---
---
##### shortDescription
A function that deletes a file or folder.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                deleteItem: function(item) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
