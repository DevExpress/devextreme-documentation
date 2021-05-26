---
id: dxGantt.Options.onResourceAssigning
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a resource is assigned to a task.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource assignment.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the processed resource and task.

---

![DevExtreme Gantt Chart - Resources](/images/Gantt/resources.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceAssigning: function (e) {
                if (e.values.taskID != 0) {
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
        onResourceAssigning(e) {
            if (e.values.taskID != 0) {
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
        (onResourceAssigning)="onResourceAssigning($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-assigning="onResourceAssigning"
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
            onResourceAssigning(e) {
                if (e.values.taskID != 0) {
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
                     onResourceAssigning={this.onResourceAssigning}
                />
            );
        }
        onResourceAssigning = (e) => {
            if (e.values.taskID != 0) {
                // your code
                e.cancel = true;
            }
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
        .onResourceAssigning("gantt_resourceAssigning_handler")
    )
    <script>
        function gantt_resourceAssigning_handler(e) {
            if (e.values.taskID != 0) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [resourceAssigning](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceAssigning.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceAssigning')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')