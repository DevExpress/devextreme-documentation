The **FileManager** widget provides the [Remote](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Remote/) file system provider to access files and folders located on the server. 

![](Content/images/doc/20_1/FileManager/remote-file-provider.png)

Assign the [Remote](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Remote/) file system provider to the [fileSystemProvider](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#fileSystemProvider) option to connect the widget to a file system located on the server. The Remote file system provider exposes APIs to get the file system hierarchy and to manage items.

Set the [endpointUrl](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_System_Providers/Remote/Configuration/#endpointUrl) option to the Url of an endpoint used to access and modify a file system.

You can also use helpers for ASP.NET Core and ASP.NET MVC to access different file systems on the server side according to the protocol the **FileManager** widget uses. Refer to the [online documentation](https://docs.devexpress.com/AspNetCore/DevExtreme.AspNet.Mvc.FileManagement) and [online demos](https://demos.devexpress.com/ASPNetCore/Demo/FileManager/Overview) to get more information about the helpers. 

The data object, which is sent back from the server, contains attributes that store the file system items' key, name, size, modification date and so on. If these attribute names differ from the conventional names, use the **[fieldName]Expr** options to map item properties.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({            
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
            }),
            allowedFileExtensions: [".js", ".json", ".css"]
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="remoteProvider"
        [allowedFileExtensions]="allowedFileExtensions">
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css']
    })  

    export class AppComponent {
        allowedFileExtensions: string[];
        remoteProvider: RemoteFileSystemProvider;

        constructor() {
            this.allowedFileExtensions = [".txt", ".doc", ".png"];
            this.remoteProvider = new RemoteFileSystemProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
            });
        }
    }
    
    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule} from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';
    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';
    
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
            :file-system-provider="remoteFileProvider"
            :allowed-file-extensions="allowedFileExtensions" >
            <!-- ... -->
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css'; 
    
    import { 
        DxFileManager, 
        DxPermissions 
    } from 'devextreme-vue/file-manager';

    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

    const remoteFileProvider = new RemoteFileProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
    });
    const allowedFileExtensions = ['.txt', '.doc', '.png'];

    export default {
        components: {
            DxFileManager,
            DxPermissions
        },
        data() {
            return {
                remoteFileProvider,
                allowedFileExtensions
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FileManager, { Permissions } from 'devextreme-react/file-manager';
    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

    const remoteFileProvider = new RemoteFileProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
    });
    const allowedFileExtensions = ['.txt', '.doc', '.png'];
    
    class App extends React.Component {
        render() {
            return (
                <FileManager 
                    fileProvider={remoteFileProvider} 
                    allowedFileExtensions={allowedFileExtensions} >
                    {/* ... */}
                </FileManager>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/"
}
