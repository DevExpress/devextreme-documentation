---
id: dxGantt.Options.onResourceManagerDialogShowing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the Resource Manager dialog is shown.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the Resource Manager dialog showing.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
<!-- Description goes here -->

##### field(e.values): Array<any>
The resources' values.

---

images

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceManagerDialogShowing: function (e) {
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
        onResourceManagerDialogShowing(e) {
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
        (onResourceManagerDialogShowing)="onResourceManagerDialogShowing($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-manager-dialog-showing="onResourceManagerDialogShowing"
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
            onResourceManagerDialogShowing(e) {
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

    const App = () => {
        const onResourceManagerDialogShowing = (e) => {
            // your code
            e.cancel = true;
        };

        return (
            <Gantt onResourceManagerDialogShowing={onResourceManagerDialogShowing} />
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
        .onResourceManagerDialogShowing("gantt_resourceManagerDialogShowing_handler")
    )
    <script>
        function gantt_resourceManagerDialogShowing_handler(e) {
            // your code
            e.cancel = true;
        }
    </script>

---

#####See Also#####
- [resourceManagerDialogShowing](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceManagerDialogShowing.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceManagerDialogShowing')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')
