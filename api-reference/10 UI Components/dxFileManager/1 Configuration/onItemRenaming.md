---
id: dxFileManager.Options.onItemRenaming
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a file or directory is renamed.

##### param(e): ItemRenamingEvent
Information about the event.

---

Select a file/directory and click the **Rename** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item to invoke the dialog. In the dialog, enter a new name and click **Save**.

The component executes the **onItemRenaming** function when a user enters a new file/directory name and clicks **Save** in the dialog.

![DevExtreme File Manager - Move File or Directory](/images/FileManager/rename-dialog.png)

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
- [permissions.rename](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/rename.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#rename')