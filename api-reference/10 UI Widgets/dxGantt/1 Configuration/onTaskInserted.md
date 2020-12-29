---
id: dxGantt.Options.onTaskInserted
type: function(e)
default: null
EventForAction: dxGantt.taskInserted
---
---
##### shortDescription
A function that is executed when a task is inserted.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the inserted task.

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
            onTaskInserted: function (e) {
                if (e.values.text == " ") {
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
        onTaskInserted(e) {
            if (e.values.text == " ") {
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
        (onTaskInserted)="onTaskInserted($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @task-inserted="onTaskInserted"
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
            onTaskInserted(e) {
                if (e.values.text == " ") {
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
                     onTaskInserted={this.onTaskInserted}
                />
            );
        }
        onTaskInserted = (e) => {
            if (e.values.text == " ") {
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
        .onTaskInserted("gantt_taskInserted_handler")
    )
    <script>
        function gantt_taskInserted_handler(e) {
            if (e.values.text == " ") {
                // your code
            }
        }
    </script>

---

#####See Also#####
- [taskInserted](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskInserted)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)