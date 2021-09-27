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
                // ...
            }) 
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        [fileSystemProvider]="fileSystemProvider">
    </dx-file-manager>  

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider'; 

    #include angular-component-decorator
    export class AppComponent {
        fileSystemProvider: CustomFileSystemProvider;
        constructor(http: HttpClient) {
            this.fileSystemProvider = new CustomFileSystemProvider({
                getItems,
                createDirectory,
                renameItem,
                deleteItem,
                // ...
            });
        }
    }

    function getItems(parentDirectory) {
        // ...
    }
    // other functions

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :file-system-provider="fileSystemProvider">
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css'; 
    import { DxFileManager } from 'devextreme-vue/file-manager';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';

    export default {
        components: {
            DxFileManager
        },

        data() {
            return {
                fileSystemProvider: new CustomFileSystemProvider({
                    getItems,
                    createDirectory,
                    renameItem,
                    deleteItem,
                    // ...
                }),
            };
        }
    };

    function getItems(parentDirectory) {
        // ...
    }
    // other functions

    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import FileManager from 'devextreme-react/file-manager';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
    
    class App extends React.Component {
        render() {
            constructor() {
                super();
                this.fileSystemProvider = new CustomFileSystemProvider({
                    getItems,
                    createDirectory,
                    renameItem,
                    deleteItem,
                    // ...
                });
            }
            return (
                <FileManager 
                    fileSystemProvider={fileSystemProvider}>
                </FileManager>
            );
        }
    }
    function getItems(parentDirectory) {
        // ...
    }
    // other functions

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItems("getItems")
            .CreateDirectory("createDirectory")
            .RenameItem("renameItem")
            .DeleteItem("deleteItem")
            // ...
        )    
    )

    <script>
        function getItems(parentDirectory) {
            // ...
        }
        // other functions
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItems("getItems")
            .CreateDirectory("createDirectory")
            .RenameItem("renameItem")
            .DeleteItem("deleteItem")
            // ...
        )    
    )

    <script>
        function getItems(parentDirectory) {
            // ...
        }
        // other functions
    </script>

---
