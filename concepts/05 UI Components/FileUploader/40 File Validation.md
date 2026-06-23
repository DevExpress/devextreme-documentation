FileUploader allows you to restrict uploaded file sizes and extensions using the following properties:

- [allowedFileExtensions](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions') 
- [minFileSize](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/minFileSize.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#minFileSize')
- [maxFileSize](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/maxFileSize.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#maxFileSize')

Define minimum and maximum file sizes in bytes. The following code snippet specifies 1 KB minimum and 1 MB maximum sizes:

---
##### jQuery

    <!-- tab: index.js -->
    $("#fileUploaderContainer").dxFileUploader({
        allowedFileExtensions: [".jpg", ".png"],
        minFileSize: 1024,
        maxFileSize: 1024 * 1024,
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        [allowedFileExtensions]="allowedFileExtensions"
        [minFileSize]="1024"
        [maxFileSize]="1024 * 1024"
    ></dx-file-uploader>

    <!-- tab: app.component.ts -->
    import { DxFileUploaderModule } from "devextreme-angular";
    
    @Component({
        imports: [DxFileUploaderModule],
    })
    export class AppComponent {
        allowedFileExtensions = ['.jpeg', '.png'];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            :allowed-file-extensions="allowedFileExtensions"
            :min-file-size="1024"
            :max-file-size="1024*1024" 
        />   
    </template>
    <script>
    import { DxFileUploader } from 'devextreme-vue/file-uploader';

    const allowedFileExtensions = ['.jpeg', '.png'];
    </script>

##### React

    <!-- tab: App.tsx -->
    import { FileUploader } from 'devextreme-react/file-uploader';
    
    const allowedFileExtensions = ['.jpeg', '.png'];

    function App() {
        return (
            <FileUploader 
                allowedFileExtensions={allowedFileExtensions}
                minFileSize={1024}
                maxFileSize={1024*1024}
            />
        );
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .AllowedFileExtensions(new[] { ".jpeg", ".png" })
        .MinFileSize(1024)
        .MaxFileSize(1024*1024)
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .AllowedFileExtensions(new[] { ".jpeg", ".png" })
        .MinFileSize(1024)
        .MaxFileSize(1024*1024)
    )

---

FileUploader validates files on the client. You should also validate uploaded files on the server. Refer to the following demo for an ASP.NET server validation example:

#include btn-open-demo with {
    href: "https://demos.devexpress.com/ASPNetMvc/Demo/FileUploader/Validation/"
}
