---
id: CustomFileSystemProvider.Options.createDirectory
type: function(parentDirectory, name)
---
---
##### shortDescription
A function that creates a directory.

##### param(parentDirectory): FileSystemItem
The parent directory where a new directory should be created.

##### param(name): String
The name of the new directory.

##### return: Promise<any> | any
A Promise that is resolved after a new directory is created.
#include ref-promisedistinction

---

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                createDirectory: function(parentDir, name) { 
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
                createDirectory,
                // ...
            });
        }
    }

    function createDirectory(parentDir, name) {
        // ...
    }
    // other functions

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileManagerModule
        ],
        //...
    })
    export class AppModule { }

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
                    createDirectory,
                    // ...
                }),
            };
        }
    };

    function createDirectory(parentDir, name) {
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
                    createDirectory,
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
    function createDirectory(parentDir, name) {
        // ...
    }
    // other functions

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .CreateDirectory("createDirectory")
            // ...
        )    
    )

    <script>
        function createDirectory(parentDir, name) {
            // ...
        }
        // other functions
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .CreateDirectory("createDirectory")
            // ...
        )    
    )

    <script>
        function createDirectory(parentDir, name) {
            // ...
        }
        // other functions
    </script>

---
