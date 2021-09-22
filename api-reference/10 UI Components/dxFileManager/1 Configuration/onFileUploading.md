---
id: dxFileManager.Options.onFileUploading
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the file is uploaded.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the file upload.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.destinationDirectory): FileSystemItem
The directory where a file is uploaded to.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
The error message.

##### field(e.fileData): File
The uploaded file.

##### field(e.model): any
Model data. Available only if you use Knockout.

---

Use the **Upload Files** context menu or toolbar item to invoke the "Open" dialog and select a file. The component executes the **onFileUploading** function when you click **Open** in the dialog.

![DevExtreme File Manager - Upload Files](/images/FileManager/upload-files-toolbar-item.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onFileUploading: function (e) {
                if (e.destinationDirectory === 'Images'){
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxFileManagerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onFileUploading(e) {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFileManagerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-file-manager ...
        (onFileUploading)="onFileUploading($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @on-file-uploading="onFileUploading"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFileManager from 'devextreme-vue/file-manager';
  
    export default {
        components: {
            DxFileManager
        },
        methods: {
            onFileUploading(e) {
                if (e.destinationDirectory === 'Images'){
                    // your code
                    e.cancel = true;
                }                
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager from 'devextreme-react/file-manager';

    const App = () => {
        const onFileUploading = (e) => {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            }           
        };

        return (
            <FileManager ...
                onFileUploading={onFileUploading} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnFileUploading("fm_fileUploading_handler")
    )
    <script>
        function fm_fileUploading_handler(e) {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnFileUploading("fm_fileUploading_handler")
    )
    <script>
        function fm_fileUploading_handler(e) {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            } 
        }
    </script>

---

#####See Also#####
- [fileUploading](/Documentation/ApiReference/UI_Components/dxFileManager/Events/#fileUploading)
