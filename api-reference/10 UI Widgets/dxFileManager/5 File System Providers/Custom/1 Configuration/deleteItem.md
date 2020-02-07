---
id: CustomFileProvider.Options.deleteItem
type: function()
---
---
##### shortDescription
A function that deletes a file or folder.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                deleteItem: function(item) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
