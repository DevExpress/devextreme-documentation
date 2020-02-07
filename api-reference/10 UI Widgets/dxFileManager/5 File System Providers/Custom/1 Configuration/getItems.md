---
id: CustomFileProvider.Options.getItems
type: function()
---
---
##### shortDescription
A function that gets file system items.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                getItems: function(pathInfo) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
