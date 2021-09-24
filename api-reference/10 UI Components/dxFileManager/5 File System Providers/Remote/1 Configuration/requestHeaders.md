---
id: RemoteFileSystemProvider.Options.requestHeaders
type: any
default: {}
---
---
##### shortDescription
Specifies the request headers.

---

[note] The **requestHeaders** option is not in effect for the file download requests. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts",
                requestHeaders: {
                    YourHeaderName: "YourHeaderValue"
                },
                // ...
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
                requestHeaders: {
                    YourHeaderName: "YourHeaderValue"
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
        requestHeaders: {
            YourHeaderName: "YourHeaderValue"
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
        requestHeaders: {
            YourHeaderName: "YourHeaderValue"
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
