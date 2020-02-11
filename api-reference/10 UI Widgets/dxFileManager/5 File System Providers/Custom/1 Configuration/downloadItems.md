---
id: CustomFileSystemProvider.Options.downloadItems
type: function()
---
---
##### shortDescription
A function that downloads a file or folder.

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
