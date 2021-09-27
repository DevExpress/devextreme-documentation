Use the [uploadHeaders](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadHeaders.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadHeaders') property to specify a header for the request.

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

    #include angular-component-decorator
    export class AppComponent {
        constructor() {
            
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader>
            <!-- ... -->
            :upload-headers="headers"
        </DxFileUploader>
    </template>

    <script>
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .UploadHeaders(headers)
    )
    </form>

    <script>
        var headers = {
            YourHeaderName: 'YourHeaderValue'
        }
    </script>

---