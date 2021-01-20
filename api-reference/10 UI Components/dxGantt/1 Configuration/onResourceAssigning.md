---
id: dxGantt.Options.onResourceAssigning
type: function(e)
default: null
EventForAction: dxGantt.resourceAssigning
---
---
##### shortDescription
A function that is executed before a resource is assigned to a task.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource assignment.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
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
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
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
- [resourceAssigning](/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceAssigning)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)