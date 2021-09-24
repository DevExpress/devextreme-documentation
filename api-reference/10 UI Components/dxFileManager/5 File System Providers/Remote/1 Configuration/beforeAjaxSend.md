---
id: RemoteFileSystemProvider.Options.beforeAjaxSend
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes an Ajax request before it is sent to the server.

##### param(options): Object
The request parameters.

##### field(options.formData): Object
Custom data (key/value pairs) that is sent to the server with the request.

##### field(options.headers): Object
The request headers.

##### field(options.xhrFields): Object
An object (fieldName/fieldValue pairs) to set on the native <a href="https://api.jquery.com/jQuery.ajax/#jqXHR" target="_blank">XMLHttpRequest object</a>.

---

[note] Use the [beforeSubmit](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/beforeSubmit.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#beforeSubmit') function to customize the **file download** requests.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                // ...
                beforeAjaxSend: function({ headers, formData, xhrFields }) {
                    headers.RequestVerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
                    formData.dataValue = "some data";
                    xhrFields.withCredentials = true;
                }  
            })
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="remoteFileProvider">
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';
    
    @Component({
        selector: 'app-root',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css']
    })  
    
    export class AppComponent {
        remoteFileProvider: RemoteFileSystemProvider;
    
        constructor(http: HttpClient) {
            this.remoteFileProvider = new RemoteFileSystemProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts",
                beforeAjaxSend: function({ headers, formData, xhrFields }) {
                    headers.RequestVerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
                    formData.dataValue = "some data";
                    xhrFields.withCredentials = true;
                }  
            });
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :file-system-provider="remoteFileProvider">
            <!-- ... -->
        </DxFileManager>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css'; 
    
    import { DxFileManager } from 'devextreme-vue/file-manager';
    
    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';
    
    const remoteFileProvider = new RemoteFileSystemProvider({
        endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts",
        beforeAjaxSend: function({ headers, formData, xhrFields }) {
            headers.RequestVerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
            formData.dataValue = "some data";
            xhrFields.withCredentials = true;
        }  
    });
    
    export default {
        components: {
            DxFileManager
        },
        data() {
            return {
                remoteFileProvider
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';
    
    import FileManager from 'devextreme-react/file-manager';
    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';
    
    const remoteFileProvider = new RemoteFileSystemProvider({
        endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts",
        beforeAjaxSend: function({ headers, formData, xhrFields }) {
            headers.RequestVerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
            formData.dataValue = "some data";
            xhrFields.withCredentials = true;
        }  
    });
    
    class App extends React.Component {
        render() {
            return (
                <FileManager 
                    fileSystemProvider={remoteFileProvider}>
                    {/* ... */}
                </FileManager>
            );
        }
    }
    export default App;

---
