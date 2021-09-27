---
id: dxFileUploader.Options.uploadCustomData
type: Object
default: {}
---
---
##### shortDescription
Specifies custom data for the upload request.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            uploadCustomData: {
                __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader id="fileUploader">
        [uploadCustomData]="{
            __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value
        }"
        <!-- ... -->
    </dx-file-uploader>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            :upload-custom-data="uploaderCustomData" >   
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
                    uploaderCustomData: {
                        __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value
                    }
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';
    
    const uploaderCustomData = {
        __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value
    };

    class App extends React.Component {
        render() {
            return (
                <FileUploader uploadCustomData={uploaderCustomData} >
                </FileUploader>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .UploadCustomData(new[] { __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value })
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .UploadCustomData(new[] { __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value })
        // ...
    )

---
