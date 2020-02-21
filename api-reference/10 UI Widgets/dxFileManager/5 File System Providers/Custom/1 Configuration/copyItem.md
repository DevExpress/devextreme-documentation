---
id: CustomFileSystemProvider.Options.copyItem
type: function(item, destinationDirectory)
---
---
##### shortDescription
A function that copies files or folders.

##### param(item): FileSystemItem
The current file system item.

##### param(destinationDirectory): FileSystemItem
The directory where a file system item is copied to.

##### return: Promise<any> | any
A Promise that is resolved after the file system item is copied. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                copyItem: function(item, destinationDir) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
