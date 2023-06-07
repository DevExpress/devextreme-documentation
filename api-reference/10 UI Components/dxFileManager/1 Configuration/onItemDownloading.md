---
id: dxFileManager.Options.onItemDownloading
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a file is downloaded.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the file download.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.errorCode): Number
#include filemanager-error-codes

##### field(e.errorText): String
Allows you to specify the error message.

##### field(e.item): FileSystemItem
The file to be downloaded.

##### field(e.model): any
Model data. Available only if you use Knockout.

---

Select a file and use the **Download** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item.

The component executes the **onItemDownloading** function when a user clicks **Download** in the dialog.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onItemDownloading: function (e) {
                // your code
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxFileManagerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemDownloading(e) {
            // your code
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
        (onItemDownloading)="onItemDownloading($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @on-item-downloading="onItemDownloading"
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
            onItemDownloading(e) {
                // your code
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager from 'devextreme-react/file-manager';

    const App = () => {
        const onItemDownloading = (e) => {
            // your code
        };

        return (
            <FileManager ...
                onItemDownloading={onItemDownloading} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnItemDownloading("fm_itemDownloading_handler")
    )
    <script>
        function fm_itemDownloading_handler(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .OnItemDownloading("fm_itemDownloading_handler")
    )
    <script>
        function fm_itemDownloading_handler(e) {
            // your code
        }
    </script>

---

#####See Also#####
- [itemDownloading](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemDownloading.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemDownloading')
- [permissions.download](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/download.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#download')