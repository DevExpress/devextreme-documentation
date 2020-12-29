---
id: dxGantt.Options.onTaskInserting
type: function(e)
default: null
EventForAction: dxGantt.taskInserting
---
---
##### shortDescription
A function that is executed before a task is inserted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the task insertion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted task.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskInserting: function (e) {
                if (e.values.text == " ") {
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
        onTaskInserting(e) {
            if (e.values.text == " ") {
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
        (onTaskInserting)="onTaskInserting($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @task-inserting="onTaskInserting"
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
            onTaskInserting(e) {
                if (e.values.text == " ") {
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
                     onTaskInserting={this.onTaskInserting}
                />
            );
        }
        onTaskInserting = (e) => {
            if (e.values.text == " ") {
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
        .onTaskInserting("gantt_taskInserting_handler")
    )
    <script>
        function gantt_taskInserting_handler(e) {
            if (e.values.text == " ") {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [taskInserting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskInserting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)