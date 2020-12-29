---
id: CustomFileSystemProvider.Options.getItems
type: function(parentDirectory)
---
---
##### shortDescription
A function that gets file system items.

##### param(parentDirectory): FileSystemItem
The directory that stores file system items.

##### return: Promise<Array<Object>> | Array<Object>
A Promise that is resolved after file system items are obtained. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

The **getItems** function returns data items and then passes them to the [dataItem](/Documentation/ApiReference/Common/Object_Structures/FileSystemItem/Fields/#dataItem) fields of the [FileSystemItem](/Documentation/ApiReference/Common/Object_Structures/FileSystemItem/) objects. You can call the [getItems](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Custom/Methods/#getItems) method to get these file system items.

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                getItems: function(pathInfo) { 
                    // Your code goes here
                }
                //...
            }) 
        });     
    });

---
