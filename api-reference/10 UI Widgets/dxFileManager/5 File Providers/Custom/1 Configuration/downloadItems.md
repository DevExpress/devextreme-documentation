---
id: CustomFileProvider.Options.downloadItems
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
            fileProvider: new DevExpress.fileProviders.Custom({ 
                downloadItems: function(Array<FileManagerItem>) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
