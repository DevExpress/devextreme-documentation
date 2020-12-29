---
id: dxGantt.Options.onResourceInserting
type: function(e)
default: null
EventForAction: dxGantt.resourceInserting
---
---
##### shortDescription
A function that is executed before a resource is inserted.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the resource insertion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted resource.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceInserting: function (e) {
                if (e.values.text == " "){
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
        onResourceInserting(e) {
            if (e.values.text == " "){
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
        (onResourceInserting)="onResourceInserting($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-inserting="onResourceInserting"
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
            onResourceInserting(e) {
                if (e.values.text == " "){
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
                     onResourceInserting={this.onResourceInserting}
                />
            );
        }
        onResourceInserting = (e) => {
            if (e.values.text == " "){
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
        .onResourceInserting("gantt_resourceInserting_handler")
    )
    <script>
        function gantt_resourceInserting_handler(e) {
            if (e.values.text == " "){
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [resourceInserting](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#resourceInserting)
- [Gantt Elements](/Documentation/Guide/Widgets/Gantt/Gantt_Elements/)