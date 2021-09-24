The UI component allows you to configure upload settings: 

- [maxFileSize](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/upload/maxFileSize.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/upload/#maxFileSize')
    Specifies the maximum upload file size. The UI component does not upload a file and displays the following error message when the file's size exceeds the maximum upload file size.

    ![DevExtreme File Manager - Max File Size](/images/FileManager/max-file-size-error-message.png)

- [chunkSize](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/upload/chunkSize.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/upload/#chunkSize')
    Specifies a chunk size to divide a large file in parts and upload them in separate requests.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({            
            permissions: {
                upload: true
            },
            upload: {
                maxFileSize: 1000000,
                chunkSize: 500000
            },
            // ...
        });
    });    

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager">
        <dxo-upload 
            [maxFileSize]="1000000" 
            [chunkSize]="500000">
        </dxo-upload>
        <dxo-permissions [upload]="true">
        </dxo-permissions>
        <!-- ... -->
    </dx-file-manager>

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
        <DxFileManager>   
            <DxUpload :max-file-size="1000000" :chunk-size="500000" />
            <DxPermissions :upload="true" />
        </DxFileManager>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';    
    
    import {
        DxFileManager,
        DxPermissions,
        DxUpload
    } from 'devextreme-vue/file-manager';

    export default {
        components: {
            DxFileManager,
            DxPermissions,
            DxUpload
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
    
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FileManager, { 
        Upload, Permissions 
    } from 'devextreme-react/file-manager';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager>
                    <Upload 
                        maxFileSize={1000000} 
                        chunkSize={500000} />
                    <Permissions
                        upload={true} />
                </FileManager>
            );
        }
    }
    export default App;

---
