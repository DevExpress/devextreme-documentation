---
id: dxFileUploader.Options.uploadChunk
type: function(file, uploadInfo)
---
---
##### shortDescription
A function that uploads a file in chunks.

##### param(file): File
The file that is uploaded.

##### param(uploadInfo): UploadInfo
Information about the file upload session.

##### return: Promise<any> | any
A Promise that is resolved after the chunk is uploaded.
#include ref-promisedistinction

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            uploadChunk: function(file, uploadInfo) {
                // your code
            }
        });      
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader ...
        [uploadChunk]="fileUploader_uploadChunk">
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
        //     this.fileUploader_uploadChunk = this.fileUploader_uploadChunk.bind(this);
        // }

        fileUploader_uploadChunk(file, uploadInfo) {
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
            :upload-chunk="fileUploader_uploadChunk"
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
            fileUploader_uploadChunk(file, uploadInfo) {
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
        //     this.fileUploader_uploadChunk = this.fileUploader_uploadChunk.bind(this);
        // }

        fileUploader_uploadChunk(file, uploadInfo) {
            // ...
        }

        render() {
            return (
                <FileUploader ...
                    uploadChunk={this.fileUploader_uploadChunk}
                />
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        @* ... *@
        .UploadChunk("uploadChunk")
    )

    <script type="text/javascript">
        function uploadChunk(file, uploadInfo) {
            // ...
        }
    </script>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        @* ... *@
        .UploadChunk("uploadChunk")
    )

    <script type="text/javascript">
        function uploadChunk(file, uploadInfo) {
            // ...
        }
    </script>

---
