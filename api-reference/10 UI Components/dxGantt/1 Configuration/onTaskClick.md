---
id: dxGantt.Options.onTaskClick
type: function(e)
default: null
EventForAction: dxGantt.taskClick
---
---
##### shortDescription
A function that is executed when a user clicks a task.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): any
The task data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

![DevExtreme Gantt Chart - Task Element](/images/Gantt/task-element.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskClick: function (e) {
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
        onTaskClick(e) {
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
        (onTaskClick)="onTaskClick($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @task-click="onTaskClick"
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
            onTaskClick(e) {
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        // ...
        render() {
            return (
                <Gantt
                     //...
                     onTaskClick={this.onTaskClick}
                />
            );
        }
        onTaskClick = (e) => {
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
        .onTaskClick("gantt_taskClick_handler")
    )
    <script>
        function gantt_taskClick_handler(e) {
            if (e.key != 0) {
                // your code
            }
        }
    </script>

---

#####See Also#####
- [taskClick](/Documentation/ApiReference/UI_Components/dxGantt/Events/#taskClick)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)