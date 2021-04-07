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

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager">
        <dxo-notifications 
            [fileSystemProvider]="fileSystemProvider">
        </dxo-notifications>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        fileSystemProvider: CustomFileSystemProvider;
        
        constructor() {
            this.fileSystemProvider = new CustomFileSystemProvider({
                getItems,
                createDirectory
            });
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
        <DxFileManager :file-provider="customFileProvider"></DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxFileManager } from 'devextreme-vue/file-manager';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';        

    const customFileProvider = new CustomFileSystemProvider({
        getItems,
        createDirectory
    });

    export default {
        components: {
            DxFileManager,
            CustomFileSystemProvider
        },
        data() {
            return { customFileProvider };
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
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';

    const customFileProvider = new CustomFileSystemProvider({
        getItems,
        createDirectory
    });

    const App = () => {
        return (
            <FileManager
                fileSystemProvider={customFileProvider} >
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
    )
    <script>
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