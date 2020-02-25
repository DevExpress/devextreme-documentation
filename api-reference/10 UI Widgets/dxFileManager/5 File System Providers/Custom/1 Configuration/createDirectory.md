---
id: CustomFileSystemProvider.Options.createDirectory
type: function(parentDirectory, name)
---
---
##### shortDescription
A function that creates a directory.

##### param(parentDirectory): FileSystemItem
The parent directory where a new directory should be created.

##### param(name): String
The name of the new directory.

##### return: Promise<any> | any
A Promise that is resolved after a new directory is created. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                createDirectory: function(parentDir, name) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
