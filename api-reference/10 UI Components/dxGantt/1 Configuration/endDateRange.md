---
id: dxGantt.Options.endDateRange
type: Date
default: null
---
---
##### shortDescription
Specifies the end date of the date interval in the Gantt chart.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ChartAppearance/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            startDateRange: new Date(2018, 01, 1),
            endDateRange: new Date(2020, 01, 1)
            // ...
        });
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-gantt
        [startDateRange]="startDateRange"
        [endDateRange]="endDateRange">
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
        startDateRange: Date;
        endDateRange: Date;
        
        constructor() {
            startDateRange: new Date("2018/01/01");
            endDateRange: new Date("2020/01/01");
        }
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
        <DxGantt
            :start-date-range="startDateRange"
            :end-date-range="endDateRange">
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
            },
            data() {
                return {
                    startDateRange: new Date(2018, 12, 1),
                    endDateRange: new Date(2020, 12, 1),
                }
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
        const startDateRange = new Date(2018, 1, 1);
        const endDateRange = new Date(2020, 1, 1);

        return (
            <Gantt
                startDateRange = {startDateRange}
                endDateRange = {endDateRange} >
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .StartDateRange(new Date("January 1, 2018"))
        .EndDateRange(new Date("January 1, 2020"))
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .StartDateRange(new Date("January 1, 2018"))
        .EndDateRange(new Date("January 1, 2020"))
        // ...
    )

---


#####See Also#####
- [startDateRange](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/startDateRange.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#startDateRange'')