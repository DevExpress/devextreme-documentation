---
id: dxHtmlEditorImageUpload.fileUploaderOptions
type: dxFileUploader_Options
default: null
---
---
##### shortDescription
Configures the file uploader options.

---

See [FileUploader Configuration](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/') for properties that you can specify in this object.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            imageUpload: {
                fileUploaderOptions:{
                    maxFileSize: 4000000
                }
                //...
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ...>
        <dxo-image-upload
            [fileUploaderOptions]="{ [maxFileSize]="4000000" }">
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
                :file-uploader-options="fu_options" />
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
                fu_options: {:max-file-size="4000000"} 
            };
        }         
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor from 'devextreme-react/html-editor';

    const fu_options = { maxFileSize={4000000} };

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor ...>
                    <ImageUpload 
                        fileUploaderOptions={this.fu_options} />
                </HtmlEditor>
            );
        }
    }
    export default App;

---