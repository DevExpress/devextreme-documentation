---
id: CustomFileSystemProvider.Options.createDirectory
type: function(parentDirectory, name)
---
---
##### shortDescription
A function that creates a folder.

##### param(parentDirectory): FileSystemItem
<!-- Description goes here -->

##### param(name): String
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
                createDirectory: function(parentDir, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
