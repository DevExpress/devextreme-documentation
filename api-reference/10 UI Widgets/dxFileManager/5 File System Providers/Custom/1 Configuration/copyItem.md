---
id: CustomFileSystemProvider.Options.copyItem
type: function()
---
---
##### shortDescription
A function that copies files or folders.

---

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                copyItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
