The **FileUploader** allows you to restrict the extension ([allowedFileExtensions](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#allowedFileExtensions')) and size ([minFileSize](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/minFileSize.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#minFileSize') and [maxFileSize](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/maxFileSize.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#maxFileSize')) of the file being uploaded. Note that the minimum and maximum file sizes should be specified in bytes:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            allowedFileExtensions: [".jpg", ".png"],
            minFileSize: 1024, // 1 KB
            maxFileSize: 1024 * 1024 // 1 MB
        });
    });

##### Angular

    <!--HTML-->
    <dx-file-uploader ...
        [allowedFileExtensions]="['.jpg', '.png']"
        [minFileSize]="1024" <!-- 1 KB -->
        [maxFileSize]="1024 * 1024"> <!-- 1 MB -->
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

Files are validated on the client. However, you should also implement server-side validation. Refer to the demo below to see an example for an ASP.NET server.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/Validation/Mvc/Light/"
}
