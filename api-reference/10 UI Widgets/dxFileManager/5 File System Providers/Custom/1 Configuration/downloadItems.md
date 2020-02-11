---
id: CustomFileSystemProvider.Options.downloadItems
type: function(items)
---
---
##### shortDescription
A function that downloads a file or folder.

##### param(items): Array<FileSystemItem>
<!-- Description goes here -->

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                downloadItems: function(Array<FileManagerItem>) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
