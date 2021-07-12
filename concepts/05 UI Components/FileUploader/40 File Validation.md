The FileUploader allows you to restrict the extension ([allowedFileExtensions](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions')) and size ([minFileSize](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/minFileSize.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#minFileSize') and [maxFileSize](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/maxFileSize.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#maxFileSize')) of the file being uploaded. Note that the minimum and maximum file sizes should be specified in bytes:

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            :allowed-file-extensions="allowedFileExtensions"
            :min-file-size="1024"
            :max-file-size="1024*1024" >   
        </DxFileUploader>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager
        } from 'devextreme-vue/file-uploader';

        export default {
            components: {
                DxFileUploader
            },
            data() {
                return {
                    allowedFileExtensions: ['.jpeg', '.png']
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    
    const allowedFileExtensions = ['.jpeg', '.png'];

    class App extends React.Component {
        render() {
            return (
                <FileUploader 
                    allowedFileExtensions={allowedFileExtensions} 
                    maxFileSize={1024*1024}
                    minFileSize={1024}
                    >
                </FileUploader>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .AllowedFileExtensions(new[] { ".jpeg", ".png" })
        .MaxFileSize(1024*1024)
        .MinFileSize(1024)
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .AllowedFileExtensions(new[] { ".jpeg", ".png" })
        .MaxFileSize(1024*1024)
        .MinFileSize(1024)
        // ...
    )


---

Files are validated on the client. However, you should also implement server-side validation. Refer to the demo below to see an example for an ASP.NET server.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/Validation/Mvc/Light/"
}
