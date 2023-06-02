---
uid: viz/chart:dxChartArgumentAxis.aggregationInterval
type: Number | Object | Enums.TimeInterval
---
---
##### shortDescription
Specifies the length of aggregation intervals in axis units. Applies only to axes of continuous and logarithmic [types](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type').

---
<!--
For data aggregation, the argument axis is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationInterval** property defines the length of each interval. 

If the axis displays numbers, assign a number to this property. For example, an **aggregationInterval** of 100 produces the following intervals: 0 to 100, 100 to 200, 200 to 300, etc. If the axis displays date-time values, set this property to one of the accepted string values. Alternatively, you can set it to an object that contains one of the fields described in this section.

---
##### jQuery

    &lt;!--JavaScript--&gt;$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // Interval of one day
                aggregationInterval: "day",
                // Interval of five days
                aggregationInterval: { days: 5 }
            }
        });
    });

##### Angular

    &lt;!--HTML--&gt;&lt;dx-chart ... &gt;
        &lt;dxo-argument-axis
            aggregationInterval="day"&gt; &lt;!-- Interval of one day --&gt;
            &lt;dxo-aggregation-interval
                [days]="5"&gt;            &lt;!-- Interval of five days --&gt;
            &lt;/dxo-aggregation-interval&gt;
        &lt;/dxo-argument-axis&gt;
    &lt;/dx-chart&gt;

    &lt;!--TypeScript--&gt;
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxChart ... &gt;
            &lt;DxArgumentAxis
                aggregation-interval="day"&gt;     &lt;!-- Interval of one day --&gt;
                &lt;DxAggregationInterval 
                    :days="5" /&gt;                &lt;!-- Interval of five days --&gt;
            &lt;/DxArgumentAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import DxChart, {
        DxArgumentAxis,
        DxAggregationInterval
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxAggregationInterval
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import Chart, {
        ArgumentAxis,
        AggregationInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ArgumentAxis
                        aggregationInterval={"day"}&gt;    {/* Interval of one day */}
                        &lt;AggregationInterval 
                            days={5} /&gt;                 {/* Interval of five days */}
                    &lt;/ArgumentAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }

    export default App;     

---

On a [logarithmic axis](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type'), intervals are calculated based on powers. For example, if the [logarithmBase](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#logarithmBase') is 10 and the **aggregationInterval** is 1, the following intervals are produced: 10&lt;sup&gt;0&lt;/sup&gt; to 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt; to 10&lt;sup&gt;2&lt;/sup&gt;, 10&lt;sup&gt;2&lt;/sup&gt; to 10&lt;sup&gt;3&lt;/sup&gt;, etc. If the **aggregationInterval** becomes 2, intervals become longer: 10&lt;sup&gt;0&lt;/sup&gt; to 10&lt;sup&gt;2&lt;/sup&gt;, 10&lt;sup&gt;2&lt;/sup&gt; to 10&lt;sup&gt;4&lt;/sup&gt;, 10&lt;sup&gt;4&lt;/sup&gt; to 10&lt;sup&gt;6&lt;/sup&gt;, etc.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/"
}

#####See Also#####
- [Data Aggregation](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/')
- **series**.[aggregation](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/')
- [aggregationGroupWidth](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth')

-->