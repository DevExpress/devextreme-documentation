---
id: CustomFileSystemProvider.Options.moveItem
type: function(item, destinationDirectory)
---
---
##### shortDescription
A function that moves files and folders.

##### param(item): FileSystemItem
<!-- Description goes here -->

##### param(destinationDirectory): FileSystemItem
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
                moveItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });
---
