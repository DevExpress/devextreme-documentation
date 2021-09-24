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

The **getItems** function returns data items and then passes them to the [dataItem](/api-reference/50%20Common/Object%20Structures/FileSystemItem/2%20Fields/dataItem.md '/Documentation/ApiReference/Common/Object_Structures/FileSystemItem/Fields/#dataItem') fields of the [FileSystemItem](/api-reference/50%20Common/Object%20Structures/FileSystemItem '/Documentation/ApiReference/Common/Object_Structures/FileSystemItem/') objects. You can call the [getItems](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/3%20Methods/getItems().md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/Methods/#getItems') method to get these file system items.

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

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        [fileSystemProvider]="fileSystemProvider">
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
        constructor(http: HttpClient) {
            this.fileSystemProvider = new CustomFileSystemProvider({
                getItems,
                // ...
            });
        }
    }

    function getItems(pathInfo) {
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
                    // ...
                }),
            };
        }
    };

    function getItems(pathInfo) {
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
    function getItems(pathInfo) {
        // ...
    }
    // other functions

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItems("getItems")
            // ...
        )    
    )

    <script>
        function getItems(pathInfo) {
            // ...
        }
        // other functions
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .GetItems("getItems")
            // ...
        )    
    )

    <script>
        function getItems(pathInfo) {
            // ...
        }
        // other functions
    </script>

---
