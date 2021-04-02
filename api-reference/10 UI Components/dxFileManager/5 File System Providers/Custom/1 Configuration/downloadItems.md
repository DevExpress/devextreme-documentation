---
id: CustomFileSystemProvider.Options.downloadItems
type: function(items)
---
---
##### shortDescription
A function that downloads files.

##### param(items): Array<FileSystemItem>
The file system items.

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
