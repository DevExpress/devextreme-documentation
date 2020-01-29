Use the [permissions](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/permissions '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/') option to specify whether to allow or deny a user to manage files and folders in the **FileManager** widget: copy, create, download, move, remove, rename, or upload. 

The widget also allows you to specify the following restrictions:
    
- [allowedFileExtensions](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#allowedFileExtensions') option - Specifies file extensions allowed for display and upload in the **FileManager** widget. The widget fails to upload and displays the error message if a user tries to upload files with restricted extensions.

    ![DevExtreme File Manager - Allowed File Extension](/images/FileManager/allowed-file-extension-error-message.png)

- [maxFileSize](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/upload/maxFileSize.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/upload/#maxFileSize') option - Specifies the maximum upload file size. The widget does not upload a file and displays the following error message when the file's size exceeds the maximum upload file size.

    ![DevExtreme File Manager - Max File Size](/images/FileManager/max-file-size-error-message.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({            
            permissions: {
                create: true,
                copy: true,
                download: true,
                move: true,
                remove: true,
                rename: true,
                upload: true
            },
            allowedFileExtensions: [".txt", ".doc", ".png"],
            upload: {
                maxFileSize: 1000000
            },
            // ...
        });
    });    

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager" 
        [allowedFileExtensions]="allowedFileExtensions" >
        <dxo-upload [maxFileSize]="1000000"></dxo-upload>
        <dxo-permissions 
            [create]="true"
            [copy]="true"
            [download]="true"
            [move]="true"
            [remove]="true"
            [rename]="true"
            [upload]="true">
        </dxo-permissions>
        <!-- ... -->
    </dx-file-manager>
    <!-- tab: app.component.ts -->
    import { DxFileManagerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        allowedFileExtensions: string[];
        
        constructor() {
            this.allowedFileExtensions = [".txt", ".doc", ".png"];
        }
        //...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager :allowed-file-extensions="['.txt', '.doc', '.png']">   
            <DxUpload :max-file-size="1000000" />
            <DxPermissions
                :create="true"
                :copy="true"
                :download="true"
                :move="true"
                :remove="true"
                :rename="true"
                :upload="true" />
        </DxFileManager>
    </template>
    <script>
        import { DxFileManager, DxPermissions } from 'devextreme-vue/file-manager';
        export default {
            components: {
                DxFileManager,
                DxPermissions
            },

            data() {
                return {
                    allowedFileExtensions,
                    {/* ... */}
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
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <FileManager allowedFileExtensions="['.txt', '.doc', '.png']" >
                    <Upload maxFileSize={1000000} />
                    <Permissions
                        create={true}
                        copy={true}
                        download={true}
                        move={true}
                        remove={true}
                        rename={true}
                        download={true} />
                </FileManager>
            );
        }
    }
    export default App;

---
