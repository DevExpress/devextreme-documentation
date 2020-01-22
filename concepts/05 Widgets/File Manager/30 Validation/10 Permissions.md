Use the [permissions](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/) option to specify whether to allow or deny a user to manage files and folders in the **FileManager**.

You can allow or deny users access to the following actions:

- [copy](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#copy) - Copy files and folders.

- [create](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#create) - Create files and folders.

- [download](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#download) - Download files and folders.

- [move](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#move) - Move files and folders.

- [remove](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#remove) - Remove files and folders.

- [rename](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#rename) - Rename files and folders.

- [upload](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/permissions/#upload) - Upload files. 

You can also specify upload file restrictions:
    
- [allowedFileExtensions](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#allowedFileExtensions) option - Specifies the allowed upload file extensions. The **FileManager** widget does not upload a file and displays the error message when the file's extension is not allowed.

    ![DevExtreme File Manager - Allowed File Extension](/images/FileManager/allowed-file-extension-error-message.png)

- [maxFileSize](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/upload/#maxFileSize) option - Specifies the maximum upload file size. The widget does not upload a file and displays the following error message when the file's size exceeds the maximum upload file size.

    ![DevExtreme File Manager - Max File Size](/images/FileManager/max-file-size-error-message.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({            
            permissions: {
                create: true,
                copy: true,
                move: true,
                remove: true,
                upload: true
            },
            allowedFileExtensions: [".js", ".json", ".css"],
            upload: {
                maxFileSize: 1000000
            },
            // ...
        });
    });    

##### Angular

    <!-- tab: app.component.ts -->
    export class AppComponent {
        allowedFileExtensions: string[];
        constructor() {
            this.allowedFileExtensions = [".js", ".json", ".css"];
        }
        //...
    }
    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager" 
        [allowedFileExtensions]="allowedFileExtensions" >
        <dxo-upload maxFileSize="1000000" />
        <dxo-permissions 
            create="true"
            copy="true"
            move="true"
            remove="true"
            upload="true" >
        </dxo-permissions>

        // ...
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxFileManager allowedFileExtensions="['.js', '.json', '.css']" >   
                <DxUpload maxFileSize="1000000" />
                <DxPermissions
                    :create="true"
                    :copy="true"
                    :move="true"
                    :remove="true"
                    :rename="true"
                    //...
                />
            </DxFileManager>
        </div>
    </template>

##### React

    <!-- tab: App.js -->
    import FileManager, { Permissions } from 'devextreme-react/file-manager';
    // ...
    render() {
        return (
        <div>
            <FileManager allowedFileExtensions="['.js', '.json', '.css']" >
                <Upload maxFileSize="1000000" />
                <Permissions
                    create={true}
                    copy={true}
                    move={true}
                    remove={true}
                    rename={true}
                    ...>
                </Permissions>
            </FileManager>
        </div>
        );
    }
    
---
