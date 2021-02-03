---
id: dxGantt.Options.onDependencyDeleting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a dependency is deleted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the dependency's deletion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The key of the deleted dependency.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the deleted dependency.

---

![DevExtreme Gantt - Dependency](/images/Gantt/dependency-element.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onDependencyDeleting: function (e) {
                if (e.key != 1) {
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
        onDependencyDeleting(e) {
            if (e.key != 1) {
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
        (onDependencyDeleting)="onDependencyDeleting($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @dependency-deleting="onDependencyDeleting"
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
            onDependencyDeleting(e) {
                if (e.key != 1) {
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
                     onDependencyDeleting={this.onDependencyDeleting}
                />
            );
        }
        onDependencyDeleting = (e) => {
            if (e.key != 1) {
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
        .onDependencyDeleting("gantt_dependencyDeleting_handler")
    )
    <script>
        function gantt_dependencyDeleting_handler(e) {
            if (e.key != 1) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [dependencyDeleting](/Documentation/ApiReference/UI_Components/dxGantt/Events/#dependencyDeleting)
- [Gantt Elements](/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/)
