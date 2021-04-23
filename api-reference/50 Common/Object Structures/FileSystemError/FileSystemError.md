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
    const objectProvider = new DevExpress.fileManagement.ObjectFileSystemProvider({ data: fileSystem });
    const noDuplicatesProvider = new DevExpress.fileManagement.CustomFileSystemProvider({
        getItems: function(parentDir) {
            return objectProvider.getItems(parentDir);
        },
        createDirectory: function(parentDir, itemName) {
            return new Promise((resolve, reject) => {
                this.getItems(parentDir).then(items => {
                    const duplicateItems = items.filter(i => i.name === itemName);
                    if(duplicateItems.length !== 0) {
                        // 1 - reject
                        reject(new DevExpress.fileManagement.FileSystemError(3));
                        // 2 - throw
                        // throw new DevExpress.fileManagement.FileSystemError(3)
                    } else {
                        resolve(objectProvider.createDirectory(parentDir, itemName));
                    }
                });
            });
        }
    });

    $("#file-manager").dxFileManager({ 
        fileSystemProvider: noDuplicatesProvider,
        permissions: { create: true }
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
    import { Service, FileItem } from "./app.service";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })

    export class AppComponent {
        fileItems: FileItem[];
        objectProvider: ObjectFileSystemProvider;
        noDuplicatesProvider: CustomFileSystemProvider;

        constructor(service: Service) {
            this.fileItems = service.getFileItems();
            this.objectProvider = new ObjectFileSystemProvider({
                data: this.fileItems
            });
            this.noDuplicatesProvider = new CustomFileSystemProvider({
                getItems: (parentDir) => this.getItems(parentDir),
                createDirectory: (parentDir, itemName) =>
                    this.createDirectory(parentDir, itemName)
            });
        }      
        getItems(item) {
            return this.objectProvider.getItems(item);
        }
        createDirectory(parentDir, itemName) {
            return new Promise<any>((resolve, reject) => {
                this.getItems(parentDir).then((items) => {
                    const duplicateItems = items.filter((i) => i.name === itemName);
                    if(duplicateItems.length !== 0) {
                        // 1 - reject
                        reject(new FileSystemError(3));
                        // 2 - throw
                        // throw new FileSystemError(3)
                    } else {
                        resolve(this.objectProvider.createDirectory(parentDir, itemName));
                    }
                });
            });
        }
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
            <DxPermissions :create="true" />
        </DxFileManager>
    </template>

    <script>
        import ObjectFileSystemProvider from "devextreme/file_management/object_provider";
        import CustomFileSystemProvider from "devextreme/file_management/custom_provider";
        import FileSystemError from "devextreme/file_management/error";
        import { DxFileManager, DxPermissions } from "devextreme-vue/file-manager";
        import { fileItems } from "./data.js";
        export default {
            components: {
                DxFileManager,
                DxPermissions,
            },
            data() {
                return {
                    objectProvider: new ObjectFileSystemProvider({ data: fileItems }),
                    noDuplicatesProvider: new CustomFileSystemProvider({
                        getItems: (parentDir) => this.getItems(parentDir),
                        createDirectory: (parentDir, itemName) =>
                            this.createDirectory(parentDir, itemName),
                    }),
                };
            },
            methods: {
                getItems(parentDir) {
                    return this.objectProvider.getItems(parentDir);
                },
                createDirectory(parentDir, itemName) {
                    return new Promise((resolve, reject) => {
                        this.getItems(parentDir).then((items) => {
                            const duplicateItems = items.filter((i) => i.name === itemName);
                            if (duplicateItems.length !== 0) {
                                // 1 - reject
                                reject(new FileSystemError(3));
                                // 2 - throw
                                // throw new FileSystemError(3)
                            } else {
                                resolve(this.objectProvider.createDirectory(parentDir, itemName));
                            }
                        });
                    });
                },
            },
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import ObjectFileSystemProvider from "devextreme/file_management/object_provider";
    import CustomFileSystemProvider from "devextreme/file_management/custom_provider";
    import FileSystemError from "devextreme/file_management/error";
    import FileManager, { Permissions } from "devextreme-react/file-manager";
    import { fileItems } from "./data.js";

    import 'devextreme/dist/css/dx.light.css';

    const objectProvider = new ObjectFileSystemProvider({
        data: fileItems
    });

    const noDuplicatesProvider = new CustomFileSystemProvider({
        getItems: (parentDir) => getItems(parentDir),
        createDirectory: (parentDir, itemName) => createDirectory(parentDir, itemName)
    });

    const getItems = (parentDir) => {
        return objectProvider.getItems(parentDir);
    };

    const createDirectory = (parentDir, itemName) => {
        return new Promise((resolve, reject) => {
            getItems(parentDir).then((items) => {
                const duplicateItems = items.filter((i) => i.name === itemName);
                if (duplicateItems.length !== 0) {
                    // 1 - reject
                    reject(new FileSystemError(3));
                    // 2 - throw
                    // throw new FileSystemError(3)
                } else {
                    resolve(objectProvider.createDirectory(parentDir, itemName));
                }
            });
        });
    };

    const App = () => {
        return (
            <FileManager 
                fileSystemProvider={noDuplicatesProvider}>
                <Permissions create={true}></Permissions>
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
                .GetItems("getItems")
                .CreateDirectory("createDirectory"))
        .Permissions(permissions => {
            permissions.Create(true);
        })
    )
    <script>
        const objectProvider = new DevExpress.fileManagement.ObjectFileSystemProvider({ data: createTestFileSystem() });

        function getItems(item) {
            return objectProvider.getItems(item);

        }
    function createDirectory(parentDir, itemName) {
        return new Promise((resolve, reject) => {
            this.getItems(parentDir).then(items => {
                const duplicateItems = items.filter(i => i.name === itemName);
                if(duplicateItems.length !== 0) {
                    // 1 - reject
                    reject(new DevExpress.fileManagement.FileSystemError(3));
                    // 2 - throw
                    // throw new DevExpress.fileManagement.FileSystemError(3);
                } else {
                    resolve(objectProvider.createDirectory(parentDir, itemName));
                }
            });
        });
    }
    </script> 
---
