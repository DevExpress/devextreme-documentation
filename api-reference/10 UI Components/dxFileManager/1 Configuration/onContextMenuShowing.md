---
id: dxFileManager.Options.onContextMenuShowing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a context menu is displayed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel showing the context menu.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fileSystemItem): FileSystemItem
The file system item for which you invoke the context menu.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.targetElement): DxElement
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
                const contextMenuItems = ['create', 'rename', 'delete'];
                if (e.viewArea === 'itemView'){
                    // your code
                    e.cancel = true;
                } else {
                    // your code
                    e.component.option('contextMenu.items', contextMenuItems);
                }
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxFileManagerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onContextMenuShowing(e) {
            const contextMenuItems = ['create', 'rename', 'delete'];
            if (e.viewArea === 'itemView'){
                // your code
                e.cancel = true;
            } else {
                // your code
                e.component.option('contextMenu.items', contextMenuItems);
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
                const contextMenuItems = ['create', 'rename', 'delete'];
                if (e.viewArea === 'itemView'){
                    // your code
                    e.cancel = true;
                } else {
                    // your code
                    e.component.option('contextMenu.items', contextMenuItems);
                }                
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
            const contextMenuItems = ['create', 'rename', 'delete'];
            if (e.viewArea === 'itemView'){
                // your code
                e.cancel = true;
            } else {
                // your code
                e.component.option('contextMenu.items', contextMenuItems);
            }            
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
        .onContextMenuShowing("fm_contextMenuShowing_handler")
    )
    <script>
        function fm_contextMenuShowing_handler(e) {
            const contextMenuItems = ['create', 'rename', 'delete'];
            if (e.viewArea === 'itemView'){
                // your code
                e.cancel = true;
            } else {
                // your code
                e.component.option('contextMenu.items', contextMenuItems);
            }
        }
    </script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

#####See Also#####
- [contextMenuShowing](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/contextMenuShowing.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#contextMenuShowing')
