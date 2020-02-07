---
id: CustomFileProvider.Options.renameItem
type: function()
---
---
##### shortDescription
A function that renames files and folders.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                renameItem: function(item, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });
    });
---
