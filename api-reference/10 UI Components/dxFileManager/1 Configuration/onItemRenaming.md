---
id: dxFileManager.Options.onItemRenaming
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a file or directory is renamed.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the file or directory rename.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
Allows you to specify the error message.

##### field(e.item): FileSystemItem
The file or directory to be renamed.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.newName): String
The new name of the file or directory.

---
---
Select a file/directory and click the **Rename** context menu or toolbar item to invoke the "Rename" dialog. The component executes the **onItemRenaming** function when you enter a new file/directory name and click **Save** in the dialog.

![DevExtreme File Manager - Move File or directory](/images/FileManager/rename-dialog.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onItemRenaming: function (e) {
                if (e.newName === 'nature.png'){
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
        onItemRenaming(e) {
            if (e.newName === 'nature.png'){
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
        (onItemRenaming)="onItemRenaming($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @on-item-renaming="onItemRenaming"
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
            onItemRenaming(e) {
                if (e.newName === 'nature.png'){
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
        const onItemRenaming = (e) => {
            if (e.newName === 'nature.png'){
                // your code
                e.cancel = true;
            }
        };

        return (
            <FileManager ...
                onItemRenaming={onItemRenaming} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnItemRenaming("fm_itemRenaming_handler")
    )
    <script>
        function fm_itemRenaming_handler(e) {
            if (e.newName === 'nature.png'){
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
        .OnItemRenaming("fm_itemRenaming_handler")
    )
    <script>
        function fm_itemRenaming_handler(e) {
            if (e.newName === 'nature.png'){
                // your code
                e.cancel = true;
            } 
        }
    </script>

---

#####See Also#####
- [itemRenaming](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemRenaming.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemRenaming')
