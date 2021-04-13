---
id: CustomFileSystemProvider.Options.renameItem
type: function(item, newName)
---
---
##### shortDescription
A function that renames files and folders.

##### param(item): FileSystemItem
The current file system item.

##### param(newName): String
The new name for the file system item.

##### return: Promise<any> | any
A Promise that is resolved after the file system item is renamed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                renameItem: function(item, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });
    });

---
