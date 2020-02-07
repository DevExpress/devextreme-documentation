---
id: CustomFileProvider.Options.createDirectory
type: function()
---
---
##### shortDescription
A function that creates a folder.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                createDirectory: function(parentDir, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
