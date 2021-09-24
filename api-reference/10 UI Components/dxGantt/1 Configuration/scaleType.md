---
id: dxGantt.Options.scaleType
acceptValues: 'auto' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies the zoom level of tasks in the Gantt chart.

---

The **scaleType** property specifies the zoom level for tasks when the Gantt UI component is initialized or when you call the **option()** method.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            scaleType: 'hours',
            // ...
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt
        [scaleType]="hours">
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        // ...      
    }    

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            :scale-type="hours" >
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
                scaleType="hours" >
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ScaleType(GanttScaleType.Weeks)
        // ...
    )

---

If the **scaleType** property is set to *"auto"*, the UI component is scaled to fit all tasks in the Gantt chart's visible area. 

To browse tasks across various levels of detail in real time, hold the CTRL key and scroll the mouse wheel to zoom (in or out).
