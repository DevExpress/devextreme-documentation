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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/AzureClientBinding/"
}

---

##### jQuery

    <!--JavaScript-->   
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: provider, 
        });
    });

    const endpointUrl = 'https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-access';
    gateway = new AzureGateway(endpointUrl, onRequestExecuted);
    azure = new AzureFileSystem(gateway);

    const provider = new DevExpress.fileManagement.CustomFileSystemProvider({
        uploadFileChunk,
        //...
    });    

    function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
        let deferred = null;
        ​
        if (uploadInfo.chunkIndex === 0) {
            const filePath = destinationDirectory.path ? `${destinationDirectory.path}/${fileData.name}` : fileData.name;
            deferred = gateway.getUploadAccessUrl(filePath).done((accessUrl) => {
            uploadInfo.customData.accessUrl = accessUrl;
            });
        } else {
            deferred = $.Deferred().resolve().promise();
        }
        ​
        deferred = deferred.then(() => gateway.putBlock(
            uploadInfo.customData.accessUrl,
            uploadInfo.chunkIndex,
            uploadInfo.chunkBlob,
        ));
        ​
        if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
            deferred = deferred.then(() => gateway.putBlockList(
                uploadInfo.customData.accessUrl,
                uploadInfo.chunkCount,
            ));
        }
        ​
        return deferred.promise();
    }
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
            const endpointUrl = 'https://js.devexpress.com/Demos/Mvc/api/file-manager-azure-access';
            gateway = new AzureGateway(endpointUrl, this.onRequestExecuted.bind(this));            

            this.fileSystemProvider = new CustomFileSystemProvider({
                uploadFileChunk,
                // ...
            });
        }
    }

    function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
    let promise = null;

    if (uploadInfo.chunkIndex === 0) {
        const filePath = destinationDirectory.path ? `${destinationDirectory.path}/${fileData.name}` : fileData.name;
        promise = gateway.getUploadAccessUrl(filePath).done((accessUrl) => {
            uploadInfo.customData.accessUrl = accessUrl;
        });
    } else {
        promise = Promise.resolve();
    }

    promise = promise.then(() => gateway.putBlock(uploadInfo.customData.accessUrl, uploadInfo.chunkIndex, uploadInfo.chunkBlob));

    if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
        promise = promise.then(() => gateway.putBlockList(uploadInfo.customData.accessUrl, uploadInfo.chunkCount));
    }

    return promise;
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
                    uploadFileChunk,
                    // ...
                }),
            };
        },
        created() {
            gateway = new AzureGateway(endpointUrl, onRequestExecuted);
            azure = new AzureFileSystem(gateway);
        },
    };

    function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
        let promise = null;

        if (uploadInfo.chunkIndex === 0) {
            const filePath = destinationDirectory.path ? `${destinationDirectory.path}/${fileData.name}` : fileData.name;
            promise = gateway.getUploadAccessUrl(filePath).done((accessUrl) => {
                uploadInfo.customData.accessUrl = accessUrl;
            });
        } else {
            promise = Promise.resolve();
        }

        promise = promise.then(() => gateway.putBlock(
            uploadInfo.customData.accessUrl,
            uploadInfo.chunkIndex,
            uploadInfo.chunkBlob,
        ));

        if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
            promise = promise.then(() => gateway.putBlockList(
                uploadInfo.customData.accessUrl,
                uploadInfo.chunkCount,
            ));
        }
        return promise;
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
                gateway = new AzureGateway(endpointUrl, this.onRequestExecuted);
                azure = new AzureFileSystem(gateway);
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
    function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
        let promise = null;

        if (uploadInfo.chunkIndex === 0) {
            const filePath = destinationDirectory.path ? `${destinationDirectory.path}/${fileData.name}` : fileData.name;
            promise = gateway.getUploadAccessUrl(filePath).done((accessUrl) => {
                uploadInfo.customData.accessUrl = accessUrl;
            });
        } else {
            promise = Promise.resolve();
        }

        promise = promise.then(() => gateway.putBlock(
            uploadInfo.customData.accessUrl,
            uploadInfo.chunkIndex,
            uploadInfo.chunkBlob,
        ));

        if (uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
            promise = promise.then(() => gateway.putBlockList(
                uploadInfo.customData.accessUrl,
                uploadInfo.chunkCount,
            ));
        }

        return promise;
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
        var endpointUrl = '@Url.RouteUrl("FileManagerAzureAccessApi")';
        var gateway = new AzureGateway(endpointUrl, onRequestExecuted);
        var azure = new AzureFileSystem(gateway);
        
        function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
            var deferred = null;

            if(uploadInfo.chunkIndex === 0) {
                var filePath = destinationDirectory.path ? destinationDirectory.path + "/" + fileData.name : fileData.name;
                deferred = gateway.getUploadAccessUrl(filePath).done(function(accessUrl) {
                    uploadInfo.customData.accessUrl = accessUrl;
                });
            } else {
                deferred = $.Deferred().resolve().promise();
            }

            deferred = deferred.then(function() {
                return gateway.putBlock(uploadInfo.customData.accessUrl, uploadInfo.chunkIndex, uploadInfo.chunkBlob);
            });

            if(uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
                deferred = deferred.then(function() {
                    return gateway.putBlockList(uploadInfo.customData.accessUrl, uploadInfo.chunkCount);
                });
            }

            return deferred.promise();
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
        var endpointUrl = '@Url.RouteUrl("FileManagerAzureAccessApi")';
        var gateway = new AzureGateway(endpointUrl, onRequestExecuted);
        var azure = new AzureFileSystem(gateway);

        function uploadFileChunk(fileData, uploadInfo, destinationDirectory) {
            var deferred = null;

            if(uploadInfo.chunkIndex === 0) {
                var filePath = destinationDirectory.path ? destinationDirectory.path + "/" + fileData.name : fileData.name;
                deferred = gateway.getUploadAccessUrl(filePath).done(function(accessUrl) {
                    uploadInfo.customData.accessUrl = accessUrl;
                });
            } else {
                deferred = $.Deferred().resolve().promise();
            }

            deferred = deferred.then(function() {
                return gateway.putBlock(uploadInfo.customData.accessUrl, uploadInfo.chunkIndex, uploadInfo.chunkBlob);
            });

            if(uploadInfo.chunkIndex === uploadInfo.chunkCount - 1) {
                deferred = deferred.then(function() {
                    return gateway.putBlockList(uploadInfo.customData.accessUrl, uploadInfo.chunkCount);
                });
            }

            return deferred.promise();
        }
        // other functions
    </script>

---
