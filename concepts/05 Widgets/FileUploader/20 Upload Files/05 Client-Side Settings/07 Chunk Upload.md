Chunk upload allows large files to be divided into parts called "chunks" and sent via multiple requests. To enable this feature, specify the [chunk size](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/chunkSize.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#chunkSize') in bytes and set [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') to *"instantly"* or *"useButtons"* to send files via Ajax requests.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/ChunkUploading/"
}

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "useButtons", // or "instantly"
            uploadUrl: "https://mydomain.com/MyUploadService",
            chunkSize: 400000 // 400 KB
        });
    });

    <!--HTML--><div id="fileUploaderContainer"></div>

#####Angular

    <!--HTML-->
    <dx-file-uploader
        name="file"
        uploadMode="useButtons" <!-- or "instantly" -->
        uploadUrl="https://mydomain.com/MyUploadService"
        [chunkSize]="400000"> <!-- 400 KB -->
    </dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule
        ],
        // ...
    })

---

On the server, you should process the received chunks and merge them into a file. See the **Server-Side Implementation** examples in [ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET/2%20Chunk%20Upload.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/#Chunk_Upload') and [PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP/2%20Chunk%20Upload.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/#Chunk_Upload').