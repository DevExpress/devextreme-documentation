---
id: CustomFileProvider
module: ui/file_manager/file_provider/custom
export: default
type: Object
inherits: FileProvider
---
---
##### shortDescription
A custom provider allows you to implement custom APIs to access and use file systems.

---
Use the custom provider's methods to handle file operations (add, delete, rename, and so on).

The following code shows how to create a custom provider and bind the **FileManager** widget to it:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileProvider: new DevExpress.fileProviders.Custom({ 
                getItems: function(pathInfo) { 
                    // Your code goes here
                }, 
                renameItem: function(item, name) { 
                    // Your code goes here
                }, 
                createDirectory: function(parentDir, name) { 
                    // Your code goes here
                }, 
                deleteItem: function(item) { 
                    // Your code goes here
                }, 
                moveItem: function(item, destinationDir) { 
                    // Your code goes here
                }, 
                copyItem: function(item, destinationDir) { 
                    // Your code goes here
                }, 
                uploadFileChunk: function(fileData, chunksInfo, destinationDir) { 
                    // Your code goes here
                }, 
                abortFileUpload: function(fileData, chunksInfo, destinationDir) { 
                    // Your code goes here
                }, 
                uploadChunkSize: 1000 
            }) 
        });
    });

---
