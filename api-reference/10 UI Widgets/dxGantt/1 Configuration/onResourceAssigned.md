---
id: dxGantt.Options.onResourceAssigned
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a resource is assigned to a task.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the inserted resource assignment. 

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the processed resource and task.

---


---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceAssigned: function (e) {
                if (e.values.taskID != 0) {
                    // your code
                }
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onResourceAssigned(e) {
            if (e.values.taskID != 0) {
                // your code
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
        (onResourceAssigned)="onResourceAssigned($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-assigned="onResourceAssigned"
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
            onResourceAssigned(e) {
                if (e.values.taskID != 0) {
                    // your code
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
                     onResourceAssigned={this.onResourceAssigned}
                />
            );
        }
        onResourceAssigned = (e) => {
            if (e.values.taskID != 0) {
                // your code
            }
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
        .onResourceAssigned("gantt_resourceAssigned_handler")
    )
    <script>
        function gantt_resourceAssigned_handler(e) {
            if (e.values.taskID != 0) {
                // your code
            }
        }
    </script>

---

#####See Also#####
- [resourceAssigned](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceAssigned)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)