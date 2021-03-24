The FileManager UI component provides the [Remote](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/') file system provider to access files and folders located on the server. 

![FileManager - remote file system on the server](/images/FileManager/remote-file-provider.png)

Assign the [Remote](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/') file system provider to the [fileSystemProvider](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/fileSystemProvider.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#fileSystemProvider') property to connect the UI component to a file system located on the server. The Remote file system provider exposes APIs to get the file system hierarchy and to manage items.

Set the [endpointUrl](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/endpointUrl.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#endpointUrl') property to the Url of an endpoint used to access and modify a file system.

You can also use helpers for ASP.NET Core and ASP.NET MVC to access different file systems on the server side according to the protocol the FileManager UI component uses. Refer to the [online documentation](https://docs.devexpress.com/AspNetCore/DevExtreme.AspNet.Mvc.FileManagement) and [online demos](https://demos.devexpress.com/ASPNetCore/Demo/FileManager/Overview) to get more information about the helpers.

The data object, which is sent back from the server, contains attributes that store the file system items' key, name, size, modification date and so on. If these attribute names differ from the conventional names, use the **[fieldName]Expr** properties to map item properties.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({            
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
            }),
            // ...
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

        constructor() {
            this.remoteFileProvider = new RemoteFileSystemProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css'; 
    
    import { DxFileManager } from 'devextreme-vue/file-manager';

    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

    const remoteFileProvider = new RemoteFileSystemProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

    const remoteFileProvider = new RemoteFileSystemProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Remote()
            .Url(Url.HttpRouteUrl("FileManagementScriptsApi", null)))
            // ...
        })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/"
}
