---
id: dxGantt.Options.scaleTypeRange
type: Object
---
---
##### shortDescription
Configures zoom range settings.

---

Use the [scaleTypeRange.start](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/#start) and [scaleTypeRange.end](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/#end) properties to limit zoom in the Gantt chart.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            scaleTypeRange: {
                start: 'days',
                end: 'years'
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-scale-type-range
            [start]="days" 
            [end]="years">
        </dxo-scale-type-range>
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
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxScaleTypeRange
                start="days"
                end="years"
            />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxScaleTypeRange, 
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, 
                DxScaleTypeRange, 
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
        ScaleTypeRange , 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <ScaleTypeRange
                    start="days"
                    end="years" />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ScaleTypeRange(e => {
            e.Start(GanttScaleType.Days)
            e.End(GanttScaleType.Years)
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ScaleTypeRange(e => {
            e.Start(GanttScaleType.Days)
            e.End(GanttScaleType.Years)
        })
        // ...
    )

---

#####See Also#####
- [scaleType](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#scaleType)
- [toolbar](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/toolbar/)
- [contextMenu](/Documentation/ApiReference/UI_Components/dxGantt/Configuration/contextMenu/)