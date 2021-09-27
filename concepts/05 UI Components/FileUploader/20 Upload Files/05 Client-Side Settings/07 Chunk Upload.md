Chunk upload allows large files to be divided into parts called "chunks" and sent via multiple requests. To enable this feature, specify the [chunk size](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/chunkSize.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#chunkSize') in bytes and set [uploadMode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') to *"instantly"* or *"useButtons"* to send files via Ajax requests.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/ChunkUploading/"
}

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "useButtons", // or "instantly"
            uploadUrl: "https://mydomain.com/MyUploadService",
            chunkSize: 400000 // 400 KB
        });
    });

    <!--HTML--><div id="fileUploaderContainer"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader id="fileUploader"
        name="file"
        uploadMode="useButtons" <!-- or "instantly" -->
        uploadUrl="https://mydomain.com/MyUploadService"
        [chunkSize]="400000"> <!-- 400 KB -->>
    </dx-file-uploader>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            name="file"
            :chunk-size="400000"
            upload-mode="useButtons" <!-- or "instantly" -->
            upload-url="https://mydomain.com/MyUploadService">
        </DxFileUploader>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';     

    import { 
        DxFileUploader
    } from 'devextreme-vue/file-uploader';

    export default {
        components: {
            DxFileUploader
        },

        data() {
            return {
                //...
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    
    class App extends React.Component {
        render() {
            return (
                <FileUploader 
                    name="file"
                    chunkSize={400000}
                    uploadMode="useButtons" {/* or "instantly" */} 
                    uploadUrl="https://mydomain.com/MyUploadService">
                </FileUploader>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .Name("file")
        .UploadMode(FileUploadMode.UseButtons) // or "instantly" 
        .UploadUrl("https://mydomain.com/MyUploadService")
        .ChunkSize(400000)
    )

---

On the server, you should process the received chunks and merge them into a file. See the **Server-Side Implementation** examples in [ASP.NET](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET/2%20Chunk%20Upload.md '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/#Chunk_Upload') and [PHP](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP/2%20Chunk%20Upload.md '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/#Chunk_Upload').