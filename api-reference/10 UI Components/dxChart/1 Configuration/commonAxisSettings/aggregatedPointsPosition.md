---
id: dxChart.Options.commonAxisSettings.aggregatedPointsPosition
type: Enums.AggregatedPointsPosition
default: 'betweenTicks'
---
---
##### shortDescription
Specifies the start position of the aggregated series points in the aggregation interval. Applies only to axes of continuous and logarithmic [types](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type').

---

![DevExtreme Charts - Aggregated points position](/images/ChartJS/aggregated-points-position.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            commonAxisSettings: {
                aggregatedPointsPosition: 'crossTicks',
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-common-axis-settings [aggregatedPointsPosition]="crossTicks" >
        </dxo-common-series-settings>
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
            <DxCommonAxisSettings :aggregated-points-position="crooTicks" />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonAxisSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCommonAxisSettings,
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        CommonAxisSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <CommonAxisSettings aggregatedPointsPosition="crossTicks" />
                </Chart>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .AggregatedPointsPosition(AggregatedPointsPosition.CrossTicks)
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .AggregatedPointsPosition(AggregatedPointsPosition.CrossTicks)
        // ...
    )

---

#####See Also#####
- [Implement a Custom Aggregate Function](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation/20%20Implement%20a%20Custom%20Aggregate%20Function.md '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/#Implement_a_Custom_Aggregate_Function')