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
    const noDuplicatesProvider = new DevExpress.fileManagement.CustomFileSystemProvider({
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
    })
    
    $("#file-manager").dxFileManager({ 
        fileSystemProvider: noDuplicatesProvider,
        permissions: { create: true }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager">
        [fileSystemProvider]="noDuplicatesProvider">
        <dxo-permissions create="true">
        </dxo-permissions>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
    import FileSystemError from 'devextreme/file_management/error';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        const realProviderInstance = new ObjectFileSystemProvider({ data: createTestFileSystem() });
        const noDuplicatesProvider = new DevExpress.fileManagement.CustomFileSystemProvider({
            getItems,
            createDirectory            
        })
        fileSystemProvider: CustomFileSystemProvider;
        
        constructor() {
            this.fileSystemProvider = noDuplicatesProvider;
        }         
    } 
    function getItems(item) {
        return realProviderInstance.getItems(item);
    }
    function createDirectory(parentDir, name) {
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

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from "devextreme-angular";

    @NgModule({
        imports: [
            // ...
            DxFileManagerModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager :file-system-provider="noDuplicatesProvider">
            <dx-permissions :create="true" />
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxFileManager } from 'devextreme-vue/file-manager';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
    import FileSystemError from 'devextreme/file_management/error';        

    const realProviderInstance = new ObjectFileSystemProvider({ data: createTestFileSystem() });

    const noDuplicatesProvider = new CustomFileSystemProvider({
        getItems,
        createDirectory
    });

    export default {
        components: {
            DxFileManager,
            CustomFileSystemProvider
        },
        data() {
            return { noDuplicatesProvider };
        }
    };

    function getItems(item) {
        return realProviderInstance.getItems(item);

    }
    function createDirectory(parentDir, name) {
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
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
    import FileSystemError from 'devextreme/file_management/error';

    const realProviderInstance = new ObjectFileSystemProvider({ data: createTestFileSystem() });

    const noDuplicatesProvider = new CustomFileSystemProvider({
        getItems,
        createDirectory
    });

    const App = () => {
        return (
            <FileManager
                fileSystemProvider={noDuplicatesProvider} >
                <Permissions create={true} >
                </Permissions>                
            </FileManager>
        );
    };

    function getItems(item) {
        return realProviderInstance.getItems(item);

    }
    function createDirectory(parentDir, name) {
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

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItems("getItems")
            .CreateDirectory("createDirectory")
        )
        .Permissions(permissions => {
            permissions.Create(true);
        })
    )
    <script>
        const realProviderInstance = new ObjectFileSystemProvider({ data: createTestFileSystem() });

        function getItems(item) {
            return realProviderInstance.getItems(item);

        }
        function createDirectory(parentDir, name) {
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
    </script> 
---