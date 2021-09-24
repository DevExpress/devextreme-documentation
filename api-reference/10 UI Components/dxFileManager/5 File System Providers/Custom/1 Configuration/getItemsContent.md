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
                getItemsContent,
                // ...
            });
        }
    }

    function getItemsContent(pathInfo) {
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
                    getItemsContent,
                    // ...
                }),
            };
        }
    };

    function getItemsContent(pathInfo) {
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
                    getItemsContent,
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
    function getItemsContent(pathInfo) {
        // ...
    }
    // other functions

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItemsContent("getItemsContent")
            // ...
        )    
    )

    <script>
        function getItemsContent(pathInfo) {
            // ...
        }
        // other functions
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItemsContent("getItemsContent")
            // ...
        )    
    )

    <script>
        function getItemsContent(pathInfo) {
            // ...
        }
        // other functions
    </script>

---
