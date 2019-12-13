Depending on the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode'), the **FileUploader** widget uses an <a href="http://www.w3schools.com/html/html_forms.asp" target="_blank">HTML form</a> or a <a href="https://developer.mozilla.org/en/docs/Web/API/FormData" target="_blank">FormData</a> interface with a series of Ajax requests to upload files.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/"
}

The following examples show how to configure the **FileUploader** for each upload mode. Therein, the [name](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#name') option is required to access uploaded files on the server.

- **Ajax upload**

    ---
    #####jQuery

        <!--HTML--><div id="fileUploaderContainer"></div>

        <!--JavaScript-->$(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following line to allow a user to upload multiple files
                // multiple: true,
                uploadMode: "useButtons", // or "instantly"
                uploadUrl: "https://mydomain.com/MyUploadService"
            });
        });

    #####Angular

        <!--HTML-->
        <dx-file-uploader
            name="file"
            <!-- Uncomment the following line to allow a user to upload multiple files -->
            <!-- [multiple]="true" -->
            uploadMode="useButtons" <!-- or "instantly" -->
            uploadUrl="https://mydomain.com/MyUploadService">
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


<!---->

- **HTML form upload**

    <!---->

    ---
    #####jQuery

        <!--HTML--><form action="https://mydomain.com/MyUploadService" method="post" enctype="multipart/form-data">
            <div id="fileUploaderContainer"></div>
            <input type="submit">
        </form>

        <!--JavaScript-->$(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following lines to allow a user to upload multiple files
                // multiple: true,
                // name: "files[]",
                uploadMode: "useForm"
            });
        });

    #####Angular

        <!--HTML-->
        <form action="https://mydomain.com/MyUploadService" method="post" enctype="multipart/form-data">
            <dx-file-uploader
                name="file"
                <!-- Uncomment the following lines to allow a user to upload multiple files -->
                <!-- [multiple]="true" -->
                <!-- name="files[]" -->
                uploadMode="useForm">
            </dx-file-uploader>
            <input type="submit">
        </form>

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

[note] If you allow a user to upload multiple files using an HTML form, the **name** option's value must end with square brackets as shown in the commented-out code line in the example above.

#####See Also#####
- [FileUploader - Upload Files | Server-Side Implementation in ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/')
- [FileUploader - Upload Files | Server-Side Implementation in PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')
- [FileUploader API Reference](/api-reference/10%20UI%20Widgets/dxFileUploader '/Documentation/ApiReference/UI_Widgets/dxFileUploader/')
