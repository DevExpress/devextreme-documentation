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

##### field(e.values): Array<any>
The resources.

---

![DevExtreme Gantt - Invoke Resource Manager](/images/Gantt/invoke-resource-manager.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceManagerDialogShowing: function (e) {
                if (e.values[0].key != 1) {
                    // your code
                    e.cancel = true;
                }
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onResourceManagerDialogShowing: function (e) {
            if (e.values[0].key != 1) {
                // your code
                e.cancel = true;
            }
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
            onResourceManagerDialogShowing: function (e) {
                if (e.values[0].key != 1) {
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

    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        // ...
        render() {
            return (
                <Gantt
                     //...
                     onResourceManagerDialogShowing={this.onResourceManagerDialogShowing}
                />
            );
        }
        onResourceManagerDialogShowing: function (e) {
            if (e.values[0].key != 1) {
                // your code
                e.cancel = true;
            }
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        .onResourceManagerDialogShowing("gantt_resourceManagerDialogShowing_handler")
        // ...
    )
    <script>
        function gantt_resourceManagerDialogShowing_handler(e) {
            if (e.values[0].key != 1) {
                // your code
                e.cancel = true;
            }
        }
    </script>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        .onResourceManagerDialogShowing("gantt_resourceManagerDialogShowing_handler")
        // ...
    )
    <script>
        function gantt_resourceManagerDialogShowing_handler(e) {
            if (e.values[0].key != 1) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [taskEditDialogShowing](/api-reference/10%20UI%20Components/dxGantt/4%20Events/taskEditDialogShowing.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#taskEditDialogShowing')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')