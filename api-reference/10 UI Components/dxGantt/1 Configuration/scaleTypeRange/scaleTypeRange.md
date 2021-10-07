---
id: dxGantt.Options.scaleTypeRange
type: Object
---
---
##### shortDescription
Configures zoom range settings.

---

Use the [scaleTypeRange.start](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/scaleTypeRange/start.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/#start') and [scaleTypeRange.end](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/scaleTypeRange/end.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/scaleTypeRange/#end') properties to limit zoom in the Gantt chart.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            scaleTypeRange: {
                min: 'days',
                max: 'years'
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-scale-type-range
            [min]="days" 
            [max]="years">
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
                min="days"
                max="years"
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
                    min="days"
                    max="years" />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ScaleTypeRange(e => {
            e.Min(GanttScaleType.Days)
            e.Max(GanttScaleType.Years)
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ScaleTypeRange(e => {
            e.Min(GanttScaleType.Days)
            e.Max(GanttScaleType.Years)
        })
        // ...
    )

---

#####See Also#####
- [scaleType](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/scaleType.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#scaleType')
- [toolbar](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/toolbar/')
- [contextMenu](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/contextMenu/')