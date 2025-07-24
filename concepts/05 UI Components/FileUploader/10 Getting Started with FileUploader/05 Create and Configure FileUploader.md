---
##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the code below to create a FileUploader component.

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({ });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="file-uploader"></div>
        </body>
    </html>

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the code below to create a FileUploader component.

    <!-- tab: app.component.html -->
    <dx-file-uploader></dx-file-uploader>

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxFileUploaderModule } from 'devextreme-angular';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxFileUploaderModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the code below to create a FileUploader component.

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { reactive } from 'vue';
    import { DxFileUploader } from 'devextreme-vue/file-uploader';
    import 'devextreme/dist/css/dx.light.css';
    </script>
    <template>
        <DxFileUploader />
    </template>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the code below to create a FileUploader component.

    <!-- tab: App.tsx -->
    import React, { JSX } from 'react';
    import { FileUploader } from 'devextreme-react/file-uploader';
    import 'devextreme/dist/css/dx.light.css';

    export default function App(): JSX.Element {
        return (
            <FileUploader />
        );
    }

---

To configure FileUploader functionality, specify the following properties:

- [multiple](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#multiple)    
Specifies if users can upload multiple files at once.
- [uploadMode](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode)    
Configures how FileUploader sends files to your server. This property accepts the following values:
    - *"instantly"* (default)    
    The component uploads with HTTP requests immediately after users select files.
    - *"useButtons"*    
    The component uploads with HTTP requests after users select files and press an upload button.
    - *"useForm"*    
    The component uploads using an HTML form when users submit the form.
- [allowCanceling](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowCanceling)    
Allows users to remove selected files and cancel uploading. Applies only if **uploadMode** is *"instantly"* or *"useButtons"*.

This example sets **uploadMode** to *"useButtons"* and enables the **multiple** and **allowCanceling** properties:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            multiple: true,
            uploadMode: 'useButtons',
            allowCanceling: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        [multiple]="true"
        uploadMode="useButtons"
        [allowCanceling]="true"
    ></dx-file-uploader>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            :multiple="true"
            upload-mode="useButtons"
            :allow-canceling="true"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    export default function App(): JSX.Element {
        return (
            <FileUploader
                multiple={true}
                uploadMode="useButtons"
                allowCanceling={true}
            />
        );
    }

---