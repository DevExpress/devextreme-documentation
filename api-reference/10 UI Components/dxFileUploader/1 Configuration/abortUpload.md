---
id: dxFileUploader.Options.abortUpload
type: function(file, uploadInfo?)
---
---
##### shortDescription
A function that cancels the file upload.

##### param(file): File
The file that is uploaded.

##### param(uploadInfo?): UploadInfo
Information about the file upload session.

##### return: Promise<any> | any
A Promise that is resolved after the upload is aborted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            abortUpload: function(file, uploadInfo) {
                // your code
            }
        });      
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader ...
        [abortUpload]="fileUploader_abortUpload">
    </dx-file-uploader>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // Uncomment the following lines if the function should be executed in the component's context
        // constructor() {
        //     this.fileUploader_abortUpload = this.fileUploader_abortUpload.bind(this);
        // }

        fileUploader_abortUpload(file, uploadInfo) {
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader ...
            :abort-upload="fileUploader_abortUpload"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFileUploader from 'devextreme-vue/file-uploader';

    export default {
        components: {
            DxFileUploader
        },
        methods: {
            fileUploader_abortUpload(file, uploadInfo) {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';

    class App extends React.Component {
        // Uncomment the following lines if the function should be executed in the component's context
        // constructor(props) {
        //     super(props);
        //     this.fileUploader_abortUpload = this.fileUploader_abortUpload.bind(this);
        // }

        fileUploader_abortUpload(file, uploadInfo) {
            // ...
        }

        render() {
            return (
                <FileUploader ...
                    abortUpload={this.fileUploader_abortUpload}
                />
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        @* ... *@
        .AbortUpload("abortUpload")
    )

    <script type="text/javascript">
        function abortUpload(file, uploadInfo) {
            // ...
        }
    </script>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        @* ... *@
        .AbortUpload("abortUpload")
    )

    <script type="text/javascript">
        function abortUpload(file, uploadInfo) {
            // ...
        }
    </script>

---
