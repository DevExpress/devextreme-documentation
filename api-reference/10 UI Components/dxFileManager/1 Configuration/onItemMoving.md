---
id: dxFileManager.Options.onItemMoving
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a file or directory is moved.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the file or directory move process.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.destinationDirectory): FileSystemItem
The directory where a file is moved to.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
Allows you to specify the error message.

##### field(e.item): FileSystemItem
The file or directory to be moved.

##### field(e.model): any
Model data. Available only if you use Knockout.

---

Select a file/folder and use the **Move To** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar item](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') to invoke the "Move To" dialog. In the dialog, select the destination directory and click **Move**.  

The component executes the **onItemMoving** function when you click **Move** in the dialog.

![DevExtreme File Manager - Move File or directory](/images/FileManager/move-to-dialog.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onItemMoving: function (e) {
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
        onItemMoving(e) {
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
        (onItemMoving)="onItemMoving($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @on-item-moving="onItemMoving"
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
            onItemMoving(e) {
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
        const onItemMoving = (e) => {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            }           
        };

        return (
            <FileManager ...
                onItemMoving={onItemMoving} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnItemMoving("fm_itemMoving_handler")
    )
    <script>
        function fm_itemMoving_handler(e) {
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
        .OnItemMoving("fm_itemMoving_handler")
    )
    <script>
        function fm_itemMoving_handler(e) {
            if (e.destinationDirectory === 'Images'){
                // your code
                e.cancel = true;
            } 
        }
    </script>

---

#####See Also#####
- [itemMoving](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemMoving.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemMoving')
- [permissions.move](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/move.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#move')