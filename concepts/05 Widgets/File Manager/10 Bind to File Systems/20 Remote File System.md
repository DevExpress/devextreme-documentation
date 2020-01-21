The **FileManager** widget provides the [Remote](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/) file provider to access files and folders located on the server. 

![](Content/images/doc/20_1/FileManager/remote-file-provider.png)

Assign the [Remote](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/) file provider to the [fileProvider](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#fileProvider) option to connect the widget to a file system located on the server. The Remote file provider exposes APIs to get a file system's hierarchy and manage the items.

Set the [endpointUrl](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Remote/Configuration/#endpointUrl) option to the Url at which the widget can get the file system items.

You can also use helpers for ASP.NET Core and ASP.NET MVC to access different file systems on the server side according to the protocol the **FileManager** widget uses. Refer to the [online documentation](https://docs.devexpress.com/AspNetCore/DevExtreme.AspNet.Mvc.FileManagement) and [online demos](https://demos.devexpress.com/ASPNetCore/Demo/FileManager/Overview/) to get more information about the helpers. 

The data object, which is sent back from the server, contains attributes that store the file system items' key, name, size, modification date and so on. If these attribute names differ from the conventional names, use the **[fieldName]Expr** options to map item properties.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({            
            fileProvider: new DevExpress.fileProviders.Remote({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
            }),
            allowedFileExtensions: [".js", ".json", ".css"]
            // ...
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFileManagerModule } from 'devextreme-angular';
    import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';
    // ...
    export class AppComponent {
        allowedFileExtensions: string[];
        remoteProvider: RemoteFileProvider;

        constructor() {
            this.allowedFileExtensions = [".js", ".json", ".css"];
            this.remoteProvider = new RemoteFileProvider({
                endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxFileManagerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-file-manager id="fileManager"
        [fileProvider]="remoteProvider"
        [allowedFileExtensions]="allowedFileExtensions">
        // ...
    </dx-file-manager>

##### Vue

    <template>
        <DxFileManager
            :file-provider="remoteFileProvider"
            :allowed-file-extensions="allowedFileExtensions" >
            // ...
        </DxFileManager>
    </template>

    <script>
    import { DxFileManager, DxPermissions } from 'devextreme-vue/file-manager';
    import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

    const remoteFileProvider = new RemoteFileProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
    });
    const allowedFileExtensions = ['.js', '.json', '.css'];
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

    import React from 'react';
    import FileManager, { Permissions } from 'devextreme-react/file-manager';
    import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';

    const remoteFileProvider = new RemoteFileProvider({
        endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
    });
    const allowedFileExtensions = ['.js', '.json', '.css'];
    class App extends React.Component {
        render() {
            return (
                <FileManager fileProvider={remoteFileProvider} allowedFileExtensions={allowedFileExtensions}>
                    // ...
                </FileManager>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/"
}