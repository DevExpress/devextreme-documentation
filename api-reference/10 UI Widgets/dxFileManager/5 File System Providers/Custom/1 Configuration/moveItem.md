---
id: CustomFileProvider.Options.moveItem
type: function()
---
---
##### shortDescription
A function that moves files and folders.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                moveItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });
---
