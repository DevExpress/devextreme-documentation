---
id: CustomFileSystemProvider.Options.getItemsContent
type: function(items)
---
---
##### shortDescription
A function that get items content.

##### param(items): Array<FileSystemItem>
The file system items.

##### return: Promise<Object> | Object
A Promise that is resolved after the content of the file system items is obtained. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

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
