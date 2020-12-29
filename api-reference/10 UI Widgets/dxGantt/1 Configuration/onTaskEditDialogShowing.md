---
id: dxGantt.Options.onTaskEditDialogShowing
type: function(e)
default: null
EventForAction: dxGantt.taskEditDialogShowing
---
---
##### shortDescription
A function that is executed before the edit dialog is shown.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the edit dialog showing.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.hiddenFields): Array<String>
An array of hidden fields.

##### field(e.key): any
The task key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.readOnlyFields): Array<String>
An array of read-only fields.

##### field(e.values): any
The task values.

---

Note that the **hiddenFields** and **readOnlyFields** parameters affect only task fields. Use the [allowTaskResourceUpdating](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/#allowTaskResourceUpdating) option to hide the Resource Manager in the Task Details dialog.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onTaskEditDialogShowing: function (e) {
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
        onTaskEditDialogShowing(e) {
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
        (onTaskEditDialogShowing)="onTaskEditDialogShowing($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @task-edit-dialog-showing="onTaskEditDialogShowing"
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
            onTaskEditDialogShowing(e) {
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
                     onTaskEditDialogShowing={this.onTaskEditDialogShowing}
                />
            );
        }
        onTaskEditDialogShowing = (e) => {
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
        .onTaskEditDialogShowing("gantt_taskEditDialogShowing_handler")
    )
    <script>
        function gantt_taskEditDialogShowing_handler(e) {
            if (e.key != 0) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [taskEditDialogShowing](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#taskEditDialogShowing)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)