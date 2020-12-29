---
id: dxGantt.Options.onTaskUpdating
type: function(e)
default: null
EventForAction: dxGantt.taskUpdating
---
---
##### shortDescription
A function that is executed before a task is updated.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the task update.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.newValues): any
The task values after update.

##### field(e.values): any
The task values before update.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskUpdating: function (e) {
                if (e.key != 0) {
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
        onTaskUpdating(e) {
            if (e.key != 0) {
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
        (onTaskUpdating)="onTaskUpdating($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @task-updating="onTaskUpdating"
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
            onTaskUpdating(e) {
                if (e.key != 0) {
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
                     onTaskUpdating={this.onTaskUpdating}
                />
            );
        }
        onTaskUpdating = (e) => {
            if (e.key != 0) {
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
        .onTaskUpdating("gantt_taskUpdating_handler")
    )
    <script>
        function gantt_taskUpdating_handler(e) {
            if (e.key != 0) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [taskUpdating](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskUpdating)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)