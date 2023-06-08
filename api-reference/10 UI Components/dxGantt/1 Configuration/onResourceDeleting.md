---
id: dxGantt.Options.onResourceDeleting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a resource is deleted.

##### param(e): ResourceDeletingEvent
Information about the event.

---

![DevExtreme Gantt Chart - Resources](/images/Gantt/resources.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onResourceDeleting: function (e) {
                if (e.key == 0) {
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
        onResourceDeleting(e) {
            if (e.key == 0) {
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
        (onResourceDeleting)="onResourceDeleting($event)">
    </dx-gantt>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-deleting="onResourceDeleting"
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
            onResourceDeleting(e) {
                if (e.key == 0) {
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
                     onResourceDeleting={this.onResourceDeleting}
                />
            );
        }
        onResourceDeleting = (e) => {
            if (e.key == 0) {
                // your code
                e.cancel = true;
            }
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        .onResourceDeleting("gantt_resourceDeleting_handler")
        // ...
    )
    <script>
        function gantt_resourceDeleting_handler(e) {
            if (e.key == 0) {
                // your code
                e.cancel = true;
            }
        }
    </script>

---

#####See Also#####
- [resourceDeleting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceDeleting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceDeleting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')