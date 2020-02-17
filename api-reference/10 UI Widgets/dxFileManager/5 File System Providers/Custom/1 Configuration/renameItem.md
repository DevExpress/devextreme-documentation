---
id: CustomFileSystemProvider.Options.renameItem
type: function(item, newName)
---
---
##### shortDescription
A function that renames files and folders.

##### param(item): FileSystemItem
<!-- Description goes here -->

##### param(newName): String
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
                renameItem: function(item, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });
    });
---
