---
id: FileSystemError
module: file_management/error
export: default
---
---
##### shortDescription
An object that contains information about the error.

---

---
##### jQuery

    <!-- tab: index.js -->
    const realProviderInstance = new ObjectFileSystemProvider({ data: createTestFileSystem() });
    $("#file-manager").dxFileManager({ 
        fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
            getItems: function(item) {
            return realProviderInstance.getItems(item);
            },
            createDirectory: function(parentDir, name) {
            const deferred = new Deferred();
                this.getItems(this.parentDir).then(items => {
                    const duplicateItems = items.filter(i => i.name === itemName);
                    if(duplicateItems.length !== 0) {
                    // 1 - deferred.reject()
                    deferred
                        .reject(new DevExpress.fileManagement.FileSystemError(3))
                        .promise();
                    // 2 - throw
                    throw new DevExpress.fileManagement.FileSystemError(3)
                    } else {
                        deferred
                        .resolve(() => this._realProviderInstance.createDirectory(parentDir, name))
                        .promise();
                    }
                });
                return deferred.promise();
            }
        });
    });

---