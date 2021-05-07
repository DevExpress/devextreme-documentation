---
id: dxGantt.Options.onSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after users select a task or clear its selection.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxGantt
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.selectedRowKey): any
The key of the row whose selection state was changed.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onSelectionChanged: function (e) {
                if (e.selectedRowKey === 2) {
                    // your code
                } else {
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
        onSelectionChanged(e) {
            if (e.selectedRowKey === 2) {
                // your code
            } else {
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
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @selection-changed="onSelectionChanged"
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
            onSelectionChanged(e) {
                if (e.selectedRowKey === 2) {
                    // your code
                } else {
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
                     onSelectionChanged={this.onSelectionChanged}
                />
            );
        }
        onSelectionChanged = (e) => {
            if (e.selectedRowKey === 2) {
                // your code
            } else {
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
        .onSelectionChanged("gantt_selectionChanged_handler")
    )
    <script>
        function gantt_selectionChanged_handler(e) {
            if (e.selectedRowKey === 2) {
                // your code
            } else {
                // your code
            }
        }
    </script>

---

#####See Also#####
- [selectionChanged](/api-reference/10%20UI%20Components/dxGantt/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#selectionChanged')
- [allowSelection](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/allowSelection.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#allowSelection') 
- [selectedRowKey](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/selectedRowKey.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#selectedRowKey')
