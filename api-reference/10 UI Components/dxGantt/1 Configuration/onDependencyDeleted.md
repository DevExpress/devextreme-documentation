---
id: dxGantt.Options.onDependencyDeleted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a dependency is deleted.

##### param(e): Object
Information about the event.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the deleted dependency.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the deleted dependency.

---

![DevExtreme Gantt - Dependency](/images/Gantt/dependency-element.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onDependencyDeleted: function (e) {
                if (e.key != 1) 
                    // your code
            }            
        })
    })

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onDependencyDeleted(e) {
            if (e.key != 1) 
                // your code
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
        (onDependencyDeleted)="onDependencyDeleted($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @dependency-deleted="onDependencyDeleted"
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
            onDependencyDeleted(e) {
                if (e.key != 1) 
                    // your code  
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
                     onDependencyDeleted={this.onDependencyDeleted}
                />
            );
        }
        onDependencyDeleted = (e) => {
            if (e.key != 1) 
                // your code
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
        .onDependencyDeleted("gantt_dependencyDeleted_handler")
    )
    <script>
        function gantt_dependencyDeleted_handler(e) {
            if (e.key != 1) 
                // your code
        }
    </script>

---

#####See Also#####
- [dependencyDeleted](/api-reference/10%20UI%20Components/dxGantt/4%20Events/dependencyDeleted.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#dependencyDeleted')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')