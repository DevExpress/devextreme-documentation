---
id: dxFileManager.Options.onDirectoryCreating
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a directory is created.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the directory creation.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
Allows you to specify the error message.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.name): String
The name of the directory.

##### field(e.parentDirectory): FileSystemItem
The parent directory.

---

Use the **Create Directory** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item to invoke the dialog. In the dialog, enter the directory name and click **Create** to create a new directory. 

The component executes the **onDirectoryCreating** function when a user enters a directory name and clicks **Create** in the dialog.

![DevExtreme File Manager - Create Directory](/images/FileManager/create-directory-dialog.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onDirectoryCreating: function (e) {
                if (e.parentDirectory.name === 'Images'){
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
        onDirectoryCreating(e) {
            if (e.parentDirectory.name === 'Images'){
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
        (onDirectoryCreating)="onDirectoryCreating($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @on-directory-creating="onDirectoryCreating"
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
            onDirectoryCreating(e) {
                if (e.parentDirectory.name === 'Images'){
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
        const onDirectoryCreating = (e) => {
            if (e.parentDirectory.name === 'Images'){
                // your code
                e.cancel = true;
            }           
        };

        return (
            <FileManager ...
                onDirectoryCreating={onDirectoryCreating} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnDirectoryCreating("fm_directoryCreating_handler")
    )
    <script>
        function fm_directoryCreating_handler(e) {
            if (e.parentDirectory.name === 'Images'){
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
        .OnDirectoryCreating("fm_directoryCreating_handler")
    )
    <script>
        function fm_directoryCreating_handler(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
                e.cancel = true;
            } 
        }
    </script>

---

#####See Also#####
- [directoryCreating](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/directoryCreating.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#directoryCreating')
- [permissions.create](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/create.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#create')