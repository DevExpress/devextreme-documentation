---
id: CustomFileSystemProvider.Options.getItemsContent
type: function(items)
---
---
##### shortDescription
A function that get items content.

##### param(items): Array<FileSystemItem>
<!-- Description goes here -->

##### return: Promise<Object> | Object
<!-- Description goes here -->

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
