---
id: dxFileManager.Options.onItemCopying
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a file or folder is copied.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the file or folder copy process.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.destinationDirectory): FileSystemItem
The directory where the file or folder is being copied to.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
The error message.

##### field(e.item): FileSystemItem
The file or folder to be copied.

##### field(e.model): any
Model data. Available only if you use Knockout.

---

Select a file/folder and click the **Copy to** context menu or toolbar item to invoke the "Copy to" dialog. The component executes the **onItemCopying** function when you select a destination folder and click **Copy** in the dialog.

![DevExtreme File Manager - Copy File or Folder](/images/FileManager/copy-to-context-menu-item.png)

![DevExtreme File Manager - Copy File or Folder](/images/FileManager/copy-to-dialog.png)

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
- [itemCopying](/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemCopying)
