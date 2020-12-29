---
id: dxGantt.Options.onDependencyInserted
type: function(e)
default: null
EventForAction: dxGantt.dependencyInserted
---
---
##### shortDescription
A function that is executed when a dependency is inserted.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the inserted dependency.

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
            onDependencyInserted: function (e) {
                if (e.values.type == 3) {
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
        onDependencyInserted(e) {
            if (e.values.type == 3) {
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
        (onDependencyInserted)="onDependencyInserted($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @dependency-inserted="onDependencyInserted"
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
            onDependencyInserted(e) {
                if (e.values.type == 3) {
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
                     onDependencyInserted={this.onDependencyInserted}
                />
            );
        }
        onDependencyInserted = (e) => {
            if (e.values.type == 3) {
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
        .onDependencyInserted("gantt_dependencyInserted_handler")
    )
    <script>
        function gantt_dependencyInserted_handler(e) {
            if (e.key != 1) {
                // your code
                e.cancel = true;
            }
        }
    </script>
---

#####See Also#####
- [dependencyInserted](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#dependencyInserted)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)
