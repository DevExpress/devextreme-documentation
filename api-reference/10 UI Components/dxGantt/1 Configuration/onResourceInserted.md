---
id: dxGantt.Options.onResourceInserted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a resource is inserted.

##### param(e): Object
Information about the event.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the inserted resource.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.values): any
The values of the inserted resource.

---

![DevExtreme Gantt Chart - Resources](/images/Gantt/resources.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceInserted: function (e) {
                if (e.values.text == " "){
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
        onResourceInserted(e) {
            if (e.values.text == " "){
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
        (onResourceInserted)="onResourceInserted($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-inserted="onResourceInserted"
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
            onResourceInserted(e) {
                if (e.values.text == " "){
                    // your code 
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
                     onResourceInserted={this.onResourceInserted}
                />
            );
        }
        onResourceInserted = (e) => {
            if (e.values.text == " "){
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
        .onResourceInserted("gantt_resourceInserted_handler")
    )
    <script>
        function gantt_resourceInserted_handler(e) {
            if (e.values.text == " "){
                // your code
            }
        }
    </script>

---

#####See Also#####
- [resourceInserted](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceInserted.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceInserted')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')