---
id: dxGantt.Options.onCustomCommand
type: function(e)
default: null
EventForAction: dxGantt.customCommand
---
---
##### shortDescription
A function that is executed after a custom command item was clicked. Allows you to implement a custom command's functionality.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.name): String
The name of the clicked item.

---

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onCustomCommand: function (e) {
                // your code
            }
        });
    }); 

##### Angular

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCustomCommand(e) {
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
        (onCustomCommand)="onCustomCommand($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @custom-command="onCustomCommand"
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
            onCustomCommand(e) {
                // your code
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
                     onCustomCommand={this.onCustomCommand}
                />
            );
        }
        onCustomCommand = (e) => {
            // your code
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
        .onCustomCommand("gantt_customCommand_handler")
    )
    <script>
        function gantt_customCommand_handler(e) {
            // your code
        }
    </script>

---

#####See Also#####
- [customCommand](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#customCommand)
