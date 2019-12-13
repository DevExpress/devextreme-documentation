---
id: dxPolarChart.Options.valueAxis.minVisualRangeLength
inherits: VizTimeInterval
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies the minimum length of the [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/visualRange/').

---
Assign a number to this option if the visual range is set on a numeric axis. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#polarChart").dxPolarChart({
            // ...
            valueAxis: {
                // ...
                minVisualRangeLength: { weeks: 2 }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-polar-chart ... >
        <dxi-value-axis ... >
            <dxo-min-visual-range-length [weeks]="2"></dxo-min-visual-range-length>
        </dxi-value-axis>
    </dx-polar-chart>

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

    import { DxPolarChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPolarChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-polar-chart ... >
            <dx-value-axis ... >
                <dx-min-visual-range-length :weeks="2" />
            </dx-value-axis>
        </dx-polar-chart>
    </template>

    <script>
    import DxPolarChart, {
        DxValueAxis,
        DxMinVisualRangeLength
    } from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart,
            DxValueAxis,
            DxMinVisualRangeLength
        },
        data() {
            return {
                // ...
            }
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PolarChart, {
        ValueAxis,
        MinVisualRangeLength
    } from 'devextreme-react/polar-chart';

    class App extends React.Component {
        render() {
            return (
                <PolarChart ... >
                    <ValueAxis ... >
                        <MinVisualRangeLength weeks={2} />
                    </ValueAxis>
                </PolarChart>
            );
        }
    }
    export default App;

---

When you use the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this option via the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- [wholeRange](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/wholeRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/wholeRange/')
- [visualRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/visualRangeUpdateMode '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#visualRangeUpdateMode')
