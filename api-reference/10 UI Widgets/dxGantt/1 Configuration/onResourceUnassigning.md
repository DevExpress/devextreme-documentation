---
id: dxGantt.Options.onResourceUnassigning
type: function(e)
default: null
EventForAction: dxGantt.resourceUnassigning
---
---
##### shortDescription
A function that is executed before a resource is unassigned from a task.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource unassignment.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The key of the resource.

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
            onResourceUnassigning: function (e) {
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
        onResourceUnassigning(e) {
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
        (onResourceUnassigning)="onResourceUnassigning($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-unassigning="onResourceUnassigning"
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
            onResourceUnassigning(e) {
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
                     onResourceUnassigning={this.onResourceUnassigning}
                />
            );
        }
        onResourceUnassigning = (e) => {
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
        .onResourceUnassigning("gantt_resourceUnassigning_handler")
    )
    <script>
        function gantt_resourceUnassigning_handler(e) {
            if (e.key != 0) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [resourceUnassigning](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceUnassigning)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)