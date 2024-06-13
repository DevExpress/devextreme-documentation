---
id: dxHtmlEditor.Options.imageUpload
type: dxHtmlEditorImageUpload
inheritsType: dxHtmlEditorImageUpload
default: { tabs: ['url'], fileUploadMode: 'base64', uploadUrl: undefined, uploadDirectory: undefined }
---
---
##### shortDescription
Configures the image upload.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-html-editor-prevent-inserting-images"
}

Click the 'Add Image' [toolbar button](/api-reference/_hidden/dxHtmlEditorToolbar/items '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/') to invoke the 'Add an Image' dialog.

<img src="/images/htmlEditor/image-upload-dialog.png" alt="DevExtreme Html Editor - Upload Images Dialog" style="width: 480px; height: auto;"/>

Use the [fileUploadMode](/api-reference/_hidden/dxHtmlEditorImageUpload/fileUploadMode.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/#fileUploadMode') property to specify whether to upload images as is or in Base64 binary format. The [tabs](/api-reference/_hidden/dxHtmlEditorImageUpload/tabs.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/#tabs') property specifies the visibility of tabs in the 'Add Image' dialog. 

[note] If [fileUploadMode](/api-reference/_hidden/dxHtmlEditorImageUpload/fileUploadMode.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/#fileUploadMode') is set to `server` or `both`, specify [uploadDirectory](/api-reference/_hidden/dxHtmlEditorImageUpload/uploadDirectory.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/#uploadDirectory') to correctly upload images. If your application does not include a shared folder, check the "Encode to Base64" check box to display an uploaded image as a `base64` string.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            imageUpload: {
                fileUploadMode: 'both',
                tabs: ['url', 'file'],
                uploadUrl: 'https://js.devexpress.com/Demos/Upload'
                uploadDirectory: '/Images'
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ...>
        <dxo-image-upload
            fileUploadMode="both"
            [tabs]="['url', 'file']"
            uploadUrl="https://js.devexpress.com/Demos/Upload"
            uploadDirectory="/Images">
        </dxo-image-upload>
    </dx-html-editor>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxHtmlEditorModule } from 'devextreme-angular';
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxHtmlEditorModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ...>
            <DxImageUpload
                fileUploadMode="both"
                :tabs="dialogTabs"
                uploadUrl="https://js.devexpress.com/Demos/Upload"
                uploadDirectory="/Images"
             />
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor
        },
        methods: {
            // ...
        },
        data() {
            return {
                dialogTabs: ['url', 'file']
            };
        }         
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor from 'devextreme-react/html-editor';

    const dialogTabs = ['url', 'file'];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor ...>
                    <ImageUpload 
                        fileUploadMode="both"
                        :tabs={dialogTabs}
                        uploadUrl="https://js.devexpress.com/Demos/Upload"
                        uploadDirectory="/Images"
                    />
                </HtmlEditor>
            );
        }
    }
    export default App;

---