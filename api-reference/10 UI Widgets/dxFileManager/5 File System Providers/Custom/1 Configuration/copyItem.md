---
id: CustomFileSystemProvider.Options.copyItem
type: function(item, destinationDirectory)
---
---
##### shortDescription
A function that copies files or folders.

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
                copyItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
