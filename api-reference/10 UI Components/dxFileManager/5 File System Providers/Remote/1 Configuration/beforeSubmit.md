---
id: RemoteFileSystemProvider.Options.beforeSubmit
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes a form submit request before it is sent to the server.

##### param(options): Object
The request parameters.

##### field(options.formData): Object
Custom data (key-value pairs) that are sent to the server with the request.

---

[note] Use the **beforeSubmit** function to customize the **file download** requests only. To customize other Ajax requests (for example, file upload requests), use the [beforeAjaxSend](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/beforeAjaxSend.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#beforeAjaxSend') function.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                // ...
                beforeSubmit: function({ formData }) {
                    formData.value = document.getElementsByName("__RequestVerificationToken")[0].value;
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
                beforeSubmit: function({ formData }) {
                    formData.value = document.getElementsByName("__RequestVerificationToken")[0].value;
                }  
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule} from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';
    
    @NgModule({
        imports: [
            BrowserModule,
            DxFileManagerModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

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
        beforeSubmit: function({ formData }) {
            formData.value = document.getElementsByName("__RequestVerificationToken")[0].value;
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
        beforeSubmit: function({ formData }) {
            formData.value = document.getElementsByName("__RequestVerificationToken")[0].value;
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
