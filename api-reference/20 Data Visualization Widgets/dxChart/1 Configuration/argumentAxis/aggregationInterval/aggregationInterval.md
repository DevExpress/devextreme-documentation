---
id: dxChart.Options.argumentAxis.aggregationInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the length of aggregation intervals in axis units. Applies only to axes of continuous and logarithmic [types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type').

---
For data aggregation, the argument axis is divided into intervals. Series points that fall within the same interval get aggregated together. The **aggregationInterval** option defines the length of each interval. 

If the axis displays numbers, assign a number to this option. For example, an **aggregationInterval** of 100 produces the following intervals: 0 to 100, 100 to 200, 200 to 300, etc. If the axis displays date-time values, set this option to one of the accepted string values. Alternatively, you can set it to an object that contains one of the fields described in this section.

---
##### jQuery

    <!--JavaScript-->$(function() {
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

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            aggregationInterval="day"> <!-- Interval of one day -->
            <dxo-aggregation-interval
                [days]="5">            <!-- Interval of five days -->
            </dxo-aggregation-interval>
        </dxo-argument-axis>
    </dx-chart>

    <!--TypeScript-->
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

---

On a [logarithmic axis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type'), intervals are calculated based on powers. For example, if the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase') is 10 and the **aggregationInterval** is 1, the following intervals are produced: 10<sup>0</sup> to 10<sup>1</sup>, 10<sup>1</sup> to 10<sup>2</sup>, 10<sup>2</sup> to 10<sup>3</sup>, etc. If the **aggregationInterval** becomes 2, intervals become longer: 10<sup>0</sup> to 10<sup>2</sup>, 10<sup>2</sup> to 10<sup>4</sup>, 10<sup>4</sup> to 10<sup>6</sup>, etc.

When using the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, you can specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *"day"* becomes `Day`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/"
}

#####See Also#####
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- **series**.[aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/')
- [aggregationGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#aggregationGroupWidth')