Depending on the [uploadMode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode'), the FileUploader UI component uses an <a href="http://www.w3schools.com/html/html_forms.asp" target="_blank">HTML form</a> or a <a href="https://developer.mozilla.org/en/docs/Web/API/FormData" target="_blank">FormData</a> interface with a series of Ajax requests to upload files.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/"
}

The following examples show how to configure the FileUploader for each upload mode. Therein, the [name](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/name.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#name') property is required to access uploaded files on the server.

- **Ajax upload**

    ---

    ##### jQuery

        <!--HTML-->
        <div id="fileUploaderContainer"></div>

        <!--JavaScript-->
        $(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following line to allow a user to upload multiple files
                // multiple: true,
                uploadMode: "useButtons", // or "instantly"
                uploadUrl: "https://mydomain.com/MyUploadService"
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-file-uploader id="fileUploader"
            <!-- Uncomment the following line to allow a user to upload multiple files -->
            <!-- [multiple]="true" -->
            uploadMode="useButtons" <!-- or "instantly" -->
            uploadUrl="https://mydomain.com/MyUploadService">
        </dx-file-uploader>  

        <!-- tab: app.module.ts -->
        #include angular-app-module-ts

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxFileUploader
                <!-- Uncomment the following line to allow a user to upload multiple files -->
                <!-- :multiple="true" -->
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
                        {/* Uncomment the following line to allow a user to upload multiple files */}
                        {/* multiple={true} */}
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
            // Uncomment the following line to allow a user to upload multiple files
            // .Multiple(true)
            .UploadMode(FileUploadMode.UseButtons) // or "instantly" 
            .UploadUrl("https://mydomain.com/MyUploadService")

    ---

<!---->

- **HTML form upload**

    <!---->

    ---

    ##### jQuery

        <!--HTML-->
        <form action="https://mydomain.com/MyUploadService" method="post" enctype="multipart/form-data">
            <div id="fileUploaderContainer"></div>
            <input type="submit">
        </form>

        <!--JavaScript-->
        $(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following lines to allow a user to upload multiple files
                // multiple: true,
                // name: "files[]",
                uploadMode: "useForm"
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
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

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';    

        #include angular-component-decorator

        export class AppComponent {
            //...
        }

        <!-- tab: app.module.ts -->
        #include angular-app-module-ts

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <form id="form"
                method="post"
                action="https://mydomain.com/MyUploadService"
                enctype="multipart/form-data">
                <DxFileUploader
                    <!-- Uncomment the following line to allow a user to upload multiple files -->
                    <!-- :multiple="true" -->
                    <!-- name="files[]" -->
                    upload-mode="useForm">
                </DxFileUploader>
                <input type="submit" >
            </form>
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
                    <form id="form" 
                        method="post" 
                        action="https://mydomain.com/MyUploadService"
                        enctype="multipart/form-data">
                        <FileUploader 
                            {/* Uncomment the following line to allow a user to upload multiple files */}
                            {/* multiple={true} */}
                            {/* name="files[]" */}
                            uploadMode="useForm">
                        </FileUploader>
                        <input type="submit"/>
                    </form>
                );
            }
        }
        export default App;

    ##### ASP.NET Core Controls

        <!--Razor C#-->
        <form id="form" method="post" enctype="multipart/form-data" action="https://mydomain.com/MyUploadService">
            @(Html.DevExtreme().FileUploader()
                // Uncomment the following line to allow a user to upload multiple files
                // .Multiple(true)
                // .Name("files[]")
                .UploadMode(FileUploadMode.UseForm)
            )
        </form>

    ---

[note] If you allow a user to upload multiple files using an HTML form, the **name** property's value must end with square brackets as shown in the commented-out code line in the example above.

#####See Also#####
- [FileUploader - Upload Files | Server-Side Implementation in ASP.NET](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/')
- [FileUploader - Upload Files | Server-Side Implementation in PHP](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')
- [FileUploader API Reference](/api-reference/10%20UI%20Components/dxFileUploader '/Documentation/ApiReference/UI_Components/dxFileUploader/')
