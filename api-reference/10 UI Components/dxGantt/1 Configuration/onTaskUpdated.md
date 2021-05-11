---
id: dxGantt.Options.onTaskUpdated
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a task is updated.

##### param(e): Object
Information about the event.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the updated task.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.values): any
The task values after update.

---

![DevExtreme Gantt Chart - Task Element](/images/Gantt/task-element.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskUpdated: function (e) {
                if (e.key != 0) {
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
        onTaskUpdated(e) {
            if (e.key != 0) {
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
        (onTaskUpdated)="onTaskUpdated($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @task-updated="onTaskUpdated"
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
            onTaskUpdated(e) {
                if (e.key != 0) {
                    // your code
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
                     onTaskUpdated={this.onTaskUpdated}
                />
            );
        }
        onTaskUpdated = (e) => {
            if (e.key != 0) {
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
        .onTaskUpdated("gantt_taskUpdated_handler")
    )
    <script>
        function gantt_taskUpdated_handler(e) {
            if (e.key != 0) {
                // your code
            }
        }
    </script>

---

#####See Also#####
- [taskUpdated](/api-reference/10%20UI%20Components/dxGantt/4%20Events/taskUpdated.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#taskUpdated')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')