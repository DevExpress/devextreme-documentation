---
id: dxFileManager.Options.onItemCopying
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a file or directory is copied.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the file or directory copy process.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.destinationDirectory): FileSystemItem
The directory where the file or directory is being copied to.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
Allows you to specify the error message.

##### field(e.item): FileSystemItem
The file or directory to be copied.

##### field(e.model): any
Model data. Available only if you use Knockout.

---

Select a file/folder and use the **Copy To** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar item](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') to invoke the "Copy To" dialog. In the dialog, select the destination directory and click **Copy**.  
 
The component executes the **onItemCopying** function when you click **Copy** in the dialog.

![DevExtreme File Manager - Copy File or directory](/images/FileManager/copy-to-context-menu-item.png)

![DevExtreme File Manager - Copy File or directory](/images/FileManager/copy-to-dialog.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onItemCopying: function (e) {
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
        onItemCopying(e) {
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
        (onItemCopying)="onItemCopying($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @on-item-copying="onItemCopying"
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
            onItemCopying(e) {
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
        const onItemCopying = (e) => {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            }           
        };

        return (
            <FileManager ...
                onItemCopying={onItemCopying} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnItemCopying("fm_itemCopying_handler")
    )
    <script>
        function fm_itemCopying_handler(e) {
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
        .OnItemCopying("fm_itemCopying_handler")
    )
    <script>
        function fm_itemCopying_handler(e) {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            } 
        }
    </script>

---

#####See Also#####
- [itemCopying](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemCopying.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemCopying')
- [permissions.copy](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/copy.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#copy')