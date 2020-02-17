---
id: CustomFileSystemProvider.Options.deleteItem
type: function(item)
---
---
##### shortDescription
A function that deletes a file or folder.

##### param(item): FileSystemItem
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
                deleteItem: function(item) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
