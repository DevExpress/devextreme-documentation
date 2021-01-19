---
id: dxChart.Options.valueAxis.minVisualRangeLength
acceptValues: 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year'
type: Number | Object | String
inherits: VizTimeInterval
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies the minimum length of the [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange/').

---
If the visual range is set on a numeric axis, assign a number to this property. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                minVisualRangeLength: { weeks: 2 }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-value-axis ... >
            <dxo-min-visual-range-length [weeks]="2"></dxo-min-visual-range-length>
        </dxi-value-axis>
    </dx-chart>

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

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxValueAxis ... >
                <DxMinVisualRangeLength :weeks="2" />
            </DxValueAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxValueAxis,
        DxMinVisualRangeLength
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
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
    import Chart, {
        ValueAxis,
        MinVisualRangeLength
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ValueAxis ... >
                        <MinVisualRangeLength weeks={2} />
                    </ValueAxis>
                </Chart>
            );
        }
    }
    export default App;

---

When you use the UI component as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this property via the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- [Visual and Whole Ranges](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/')
- [visualRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRangeUpdateMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#visualRangeUpdateMode')
- [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/')