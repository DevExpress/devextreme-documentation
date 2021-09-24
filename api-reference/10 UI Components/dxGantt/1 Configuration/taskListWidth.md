---
id: dxGantt.Options.taskListWidth
type: Number
default: 300
---
---
##### shortDescription
Specifies the width of the task list in pixels.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

![DevExtreme Gantt Chart - Task List](/images/Gantt/task-list.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            taskListWidth: 200,
            // ...
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt
        [taskListWidth]="200">
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            :task-list-width="200" >
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt
                // ... 
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt
                taskListWidth={200} >
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .TaskListWidth(200)
        // ...
    )

---