---
id: dxGantt.Options.onDependencyInserting
type: function(e)
default: null
EventForAction: dxGantt.dependencyInserting
---
---
##### shortDescription
A function that is executed before a dependency is inserted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the dependency's insertion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted dependency.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onDependencyInserting: function (e) {
                if (e.values.type == 3) {
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
        onDependencyInserting(e) {
            if (e.values.type == 3) {
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
        (onDependencyInserting)="onDependencyInserting($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @dependency-inserting="onDependencyInserting"
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
            onDependencyInserting(e) {
                if (e.values.type == 3) {
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
                     onDependencyInserting={this.onDependencyInserting}
                />
            );
        }
        onDependencyInserting = (e) => {
            if (e.values.type == 3) {
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
        .onDependencyInserting("gantt_dependencyInserting_handler")
    )
    <script>
        function gantt_dependencyInserting_handler(e) {
            if (e.key != 1) {
                // your code
                e.cancel = true;
            }
        }
    </script>
---

#####See Also#####
- [dependencyInserting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#dependencyInserting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)
