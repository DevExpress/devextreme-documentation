Use the [uploadHeaders](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadHeaders.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadHeaders') option to specify a header for the request.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#file-uploader").dxFileUploader({
            // 
            uploadHeaders: {
                YourHeaderName: "YourHeaderValue" 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader>
        <!-- ... -->
        [uploadHeaders]="{
            YourHeaderName: 'YourHeaderValue'
        }"        
    </dx-file-uploader>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFileUploaderModule } from 'devextreme-angular';

    @NgModule({
        declarations: [AppComponent],
        imports: [
            BrowserModule,
            DxFileUploaderModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader>
            <!-- ... -->
            :upload-headers="headers"
        </DxFileUploader>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {DxFileUploader} from 'devextreme-vue/file-uploader';

    export default {
        components: {
            DxFileUploader
        },
        data() {
            return {
                headers:{
                    YourHeaderName: 'YourHeaderValue'
                }
            }
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FileUploader from 'devextreme-react/file-uploader';

    class App extends React.Component {
        headers = {
            YourHeaderName: 'YourHeaderValue'
        }
        
        render() {
            return (
                <FileUploader ...
                    uploadHeaders={this.headers}>
                </FileUploader>
            );
        }
    }
    export default App;

---