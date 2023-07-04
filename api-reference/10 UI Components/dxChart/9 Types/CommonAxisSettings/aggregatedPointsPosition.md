---
uid: viz/chart:CommonAxisSettingsaggregatedPointsPosition
type: Enums.AggregatedPointsPosition
default: 'betweenTicks'
---
---
##### shortDescription
Specifies the start position of the aggregated series points in the aggregation interval.

---
<!--

![DevExtreme Charts - Aggregated points position](/images/ChartJS/aggregated-points-position.png)

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            commonAxisSettings: {
                aggregatedPointsPosition: 'crossTicks',
            },
        });
    });

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-chart ... &gt;
        &lt;dxo-common-axis-settings [aggregatedPointsPosition]="crossTicks" &gt;
        &lt;/dxo-common-series-settings&gt;
    &lt;/dx-chart&gt;

    &lt;!-- tab: app.component.ts --&gt;
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxChart ... &gt;
            &lt;DxCommonAxisSettings :aggregated-points-position="crooTicks" /&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import Chart, {
        CommonAxisSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;CommonAxisSettings aggregatedPointsPosition="crossTicks" /&gt;
                &lt;/Chart&gt;
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    &lt;!--Razor C#--&gt;
    @(Html.DevExtreme().Chart()
        .AggregatedPointsPosition(AggregatedPointsPosition.CrossTicks)
        // ...
    )

##### ASP.NET MVC Controls

    &lt;!--Razor C#--&gt;
    @(Html.DevExtreme().Chart()
        .AggregatedPointsPosition(AggregatedPointsPosition.CrossTicks)
        // ...
    )

---

#####See Also#####
- [Implement a Custom Aggregate Function](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation/20%20Implement%20a%20Custom%20Aggregate%20Function.md '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/#Implement_a_Custom_Aggregate_Function')
-->