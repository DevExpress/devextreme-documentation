---
id: CustomFileSystemProvider.Options.getItemsContent
type: function()
---
---
##### shortDescription
A function that get items content.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                getItemsContent: function(pathInfo) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });
---
