---
id: CustomFileSystemProvider.Options.deleteItem
type: function(item)
---
---
##### shortDescription
A function that deletes a file or folder.

##### param(item): FileSystemItem
The current file system item.

##### return: Promise<any> | any
A Promise that is resolved after a file system item is deleted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                deleteItem: function(item) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
