---
id: dxGantt.Options.onContextMenuPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel showing the context menu.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.data): any
Data of the right-clicked task or dependency.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.items): Array<Object>
Items to be displayed in the context menu.

##### field(e.targetKey): any
The key of the right-clicked task or dependency.

##### field(e.targetType): String
The type of right-clicked task or dependency.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onContextMenuPreparing: function (e) {
                // your code
                e.cancel = true;
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onContextMenuPreparing(e) {
            // your code
            e.cancel = true;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-gantt ...
        (onContextMenuPreparing)="onContextMenuPreparing($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @context-menu-preparing="onContextMenuPreparing"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxGantt from 'devextreme-vue/gantt';
  
    export default {
        components: {
            DxGantt
        },
        methods: {
            onContextMenuPreparing(e) {
                // your code
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        // ...
        render() {
            return (
                <Gantt
                     //...
                     onContextMenuPreparing={this.onContextMenuPreparing}
                />
            );
        }
        onContextMenuPreparing = (e) => {
            // your code
            e.cancel = true;
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
        .onContextMenuPreparing("gantt_contextMenuPreparing_handler")
    )
    <script>
        function gantt_contextMenuPreparing_handler(e) {
            // your code
            e.cancel = true;
        }
    </script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ContextMenu/"
}

#####See Also#####
- [contextMenuPreparing](/api-reference/10%20UI%20Components/dxGantt/4%20Events/contextMenuPreparing.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#contextMenuPreparing')
