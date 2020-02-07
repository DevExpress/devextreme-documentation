---
id: CustomFileProvider.Options.copyItem
type: function()
---
---
##### shortDescription
A function that copies files or folders.

---

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                copyItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
