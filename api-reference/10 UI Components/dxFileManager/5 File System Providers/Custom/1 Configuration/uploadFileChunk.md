---
id: CustomFileSystemProvider.Options.uploadFileChunk
type: function(file, uploadInfo, destinationDirectory)
---
---
##### shortDescription
A function that uploads a file in chunks.

##### param(file): File
The file that is being uploaded.

##### param(uploadInfo): UploadInfo
Information about the file upload session.

##### param(destinationDirectory): FileSystemItem
The directory where a file system item is uploaded to.

##### return: Promise<any> | any
A Promise that is resolved after the file system item is uploaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                uploadFileChunk: function(fileData, chunksInfo, destinationDir) { 
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
                uploadFileChunk,
                // ...
            });
        }
    }

    function uploadFileChunk(fileData, chunksInfo, destinationDir) {
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
                    uploadFileChunk,
                    // ...
                }),
            };
        }
    };

    function uploadFileChunk(fileData, chunksInfo, destinationDir) {
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
                    uploadFileChunk,
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
    function uploadFileChunk(fileData, chunksInfo, destinationDir) {
        // ...
    }
    // other functions

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .UploadFileChunk("uploadFileChunk")
            // ...
        )    
    )

    <script>
        function uploadFileChunk(fileData, chunksInfo, destinationDir) {
            // ...
        }
        // other functions
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Custom()
            .UploadFileChunk("uploadFileChunk")
            // ...
        )    
    )

    <script>
        function uploadFileChunk(fileData, chunksInfo, destinationDir) {
            // ...
        }
        // other functions
    </script>

---
