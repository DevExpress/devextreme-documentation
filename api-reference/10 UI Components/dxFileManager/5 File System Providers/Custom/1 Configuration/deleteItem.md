---
id: CustomFileSystemProvider.Options.deleteItem
type: function(item)
---
---
##### shortDescription
A function that deletes a file or folder.

##### param(item): FileSystemItem
The current file system item.

##### return: Promise<any> | any
A Promise that is resolved after a file system item is deleted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                deleteItem: function(item) { 
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
                deleteItem,
                // ...
            });
        }
    }

    function deleteItem(item) {
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
                    deleteItem,
                    // ...
                }),
            };
        }
    };

    function deleteItem(item) {
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
    function deleteItem(item) {
        // ...
    }
    // other functions

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .DeleteItem("deleteItem")
            // ...
        )    
    )

    <script>
        function deleteItem(item) {
            // ...
        }
        // other functions
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .DeleteItem("deleteItem")
            // ...
        )    
    )

    <script>
        function deleteItem(item) {
            // ...
        }
        // other functions
    </script>

---
