---
id: RemoteFileSystemProvider
module: file_management/remote_provider
export: default
inherits: FileSystemProviderBase
---
---
##### shortDescription
The **Remote** file system provider works with a file system located on the server.

---

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-file-manager-azure-server-side-binding"
}

Set the [endpointUrl](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/endpointUrl.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#endpointUrl') property to specify the endpoint used to access and modify the file system.

The server should return data objects of the following structure:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        hasSubDirectories: true
    }

Fields in this structure have conventional names that you can change via **[fieldName]Expr** properties: [nameExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#dateModifiedExpr'), and so on.

The following code shows how to bind the FileManager to the **Remote** file system provider:

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
            .Url(Url.RouteUrl("FileManagerDBProviderApi")))
    )

    <!--FileManagerDBProviderApiController-->
    [Route("api/file-manager-file-system", Name = "FileManagementFileSystemApi")]
    public object FileSystem(FileSystemCommand command, string arguments) {
        var config = new FileSystemConfiguration {
            Request = Request,
            FileSystemProvider = new PhysicalFileSystemProvider(_hostingEnvironment.ContentRootPath + "/wwwroot"),
            // ...
        };
        var processor = new FileSystemCommandProcessor(config);
        var result = processor.Execute(command, arguments);
        return result.GetClientCommandResult();
    }

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider.Remote()
            .Url(Url.RouteUrl("FileManagerDBProviderApi")))
    )

    <!--FileManagerDBProviderApiController-->
    [Route("api/file-manager-file-system", Name = "FileManagementFileSystemApi")]
    public object FileSystem(FileSystemCommand command, string arguments) {
        var config = new FileSystemConfiguration {
            Request = Request,
            FileSystemProvider = new PhysicalFileSystemProvider(_hostingEnvironment.ContentRootPath + "/wwwroot"),
            // ...
        };
        var processor = new FileSystemCommandProcessor(config);
        var result = processor.Execute(command, arguments);
        return result.GetClientCommandResult();
    }

---

On the server-side, you need to process file management requests. DevExtreme provides helpers for ASP.NET MVC and ASP.NET Core that do this. To view the server-side code, navigate to the `FileManagerApiController.cs` tab in the following demo:

#include btn-open-demo with {
    href: "https://demos.devexpress.com/aspnetcore/Demo/FileManager/BindingToFileSystem/"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-treelist-show-folders-and-files"
}
