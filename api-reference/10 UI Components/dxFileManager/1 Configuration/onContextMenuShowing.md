---
id: dxFileManager.Options.onContextMenuShowing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a context menu item is displayed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel showing the context menu.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fileSystemItem): FileSystemItem
The file system item for which you invoke the context menu.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.targetElement): dxElement
The file system item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery. This element can be a grid element or a thumbnail (for the items view area), or a tree view node (for the navigation panel). The **targetElement** field value is 'undefined' if you click on empty space in the items view area.

##### field(e.viewArea): 'navPane' | 'itemView'
Specifies whether the context menu is invoked in the navigation panel or in the items view area.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({
            // ...
            onContextMenuShowing: function (e) {
                // your code
                e.cancel = true;
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxFileManagerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onContextMenuShowing(e) {
            // your code
            e.cancel = true;
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
        (onContextMenuShowing)="onContextMenuShowing($event)">
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            ...
            @context-menu-showing="onContextMenuShowing"
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
            onContextMenuShowing(e) {
                // your code
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager, { ContextMenu } from 'devextreme-react/file-manager';

    const App = () => {
        const onContextMenuShowing = (e) => {
            // your code
        };

        return (
            <FileManager ...
                onContextMenuShowing={onContextMenuShowing} />            
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("file-manager")
        // ...
        .onContextMenuShowing("gantt_contextMenuShowing_handler")
    )
    <script>
        function gantt_contextMenuShowing_handler(e) {
            // your code
            e.cancel = true;
        }
    </script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

#####See Also#####
- [contextMenuShowing](/Documentation/ApiReference/UI_Components/dxFileManager/Events/#contextMenuShowing)
