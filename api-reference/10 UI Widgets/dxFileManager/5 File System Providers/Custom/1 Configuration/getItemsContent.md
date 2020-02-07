---
id: CustomFileProvider.Options.getItemsContent
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
            fileProvider: new DevExpress.fileProviders.Custom({ 
                getItemsContent: function(pathInfo) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });
---
