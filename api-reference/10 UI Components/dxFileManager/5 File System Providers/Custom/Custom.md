---
id: CustomFileSystemProvider
module: file_management/custom_provider
export: default
type: Object
inherits: FileSystemProviderBase
---
---
##### shortDescription
A custom file system provider allows you to implement custom APIs to access and use file systems.

---
Use the custom provider's methods to handle file operations (add, delete, rename, and so on).

The following code shows how to create a custom file system provider and bind the FileManager UI component to it:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
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
