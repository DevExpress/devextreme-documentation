---
id: dxFileUploader.Options.uploadFile
type: function(file, progressCallback)
---
---
##### shortDescription
A function that uploads a file.

##### param(file): File
The file that is uploaded.

##### param(progressCallback): function()
A function that you should call to notify the UI component about the file upload progress.

##### return: Promise<any> | any
A Promise that is resolved after the file is uploaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            multiple: true,
            uploadFile: function(file, progressCallback) {
                // your code
                progressCallback(100);
                // ...
                progressCallback(200);
                // ...
            }
        });         
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader ...
        [uploadFile]="fileUploader_uploadFile">
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
        //     this.fileUploader_uploadFile = this.fileUploader_uploadFile.bind(this);
        // }

        fileUploader_uploadFile(file, progressCallback) {
            // your code
            progressCallback(100);
            // ...
            progressCallback(200);
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFileUploaderModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileUploaderModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader ...
            :upload-file="fileUploader_uploadFile"
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
            fileUploader_uploadFile(file, progressCallback) {
                // your code
                progressCallback(100);
                // ...
                progressCallback(200);
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
        //     this.fileUploader_uploadFile = this.fileUploader_uploadFile.bind(this);
        // }

        fileUploader_uploadFile(file, progressCallback) {
            // your code
            progressCallback(100);
            // ...
            progressCallback(200);
            // ...
        }

        render() {
            return (
                <FileUploader ...
                    uploadFile={this.fileUploader_uploadFile}
                />
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        @* ... *@
        .UploadFile("uploadFile")
    )

    <script type="text/javascript">
        function uploadFile(file, progressCallback) {
            // your code
            progressCallback(100);
            // ...
            progressCallback(200);
            // ...
        }
    </script>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        @* ... *@
        .UploadFile("uploadFile")
    )

    <script type="text/javascript">
        function uploadFile(file, progressCallback) {
            // your code
            progressCallback(100);
            // ...
            progressCallback(200);
            // ...
        }
    </script>

---
