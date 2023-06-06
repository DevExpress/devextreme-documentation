---
id: dxFileManager.Options.onContextMenuShowing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a context menu is displayed.

##### param(e): ContextMenuShowingEvent
Information about the event that caused the function's execution.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

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
        const menuItems = ['create', 'rename', 'delete'];
        const [contextMenuItems, setContextMenuItems] = useState(menuItems);
        const filterMenuItems = useCallback((items) => {
            return items.filter((item) => item !== "delete");
        }, []);
        const onContextMenuShowing = useCallback(
            (e) => {
                if (e.viewArea === "itemView") {
                    // your code
                    e.cancel = true;
                }
                // else {
                //   If you dynamically change context menu items, use the following code to update the item states: 
                //   setContextMenuItems(filterMenuItems(contextMenuItems));
                // }
            },
            [filterMenuItems, contextMenuItems]
        };

        return (
            <FileManager 
                onContextMenuShowing={onContextMenuShowing}>
                <ContextMenu items={contextMenuItems}></ContextMenu>
            </FileManager>
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

##### ASP.NET Core Controls

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

#####See Also#####
- [contextMenuShowing](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/contextMenuShowing.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#contextMenuShowing')
