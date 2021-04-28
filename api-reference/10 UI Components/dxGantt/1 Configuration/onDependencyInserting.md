---
id: dxGantt.Options.onDependencyInserting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a dependency is inserted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the dependency's insertion.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted dependency.

---

![DevExtreme Gantt - Dependency](/images/Gantt/dependency-element.png)

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
- [dependencyInserting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/dependencyInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#dependencyInserting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')
