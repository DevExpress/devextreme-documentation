Line series visualize data as a collection of points connected by a line. This line can be broken, smooth, or step-like, which corresponds to the **Line**, **Spline**, and **Step Line** series types.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/line.html, /Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/line.js"></div>

Line series also include stacked series types: **Stacked Line** and **Stacked Spline**. In such series, the value of each next point is counted off from the previous point with the same argument. As a result, series are put in a stack. Very similar to stacked series are full-stacked series - **Full-Stacked Line** and **Full-Stacked Spline**. In these series, the sum of all point values by a given argument is considered 100%, and each individual point value is recalculated to be a share of these 100%.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/stackedline.html, /Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/stackedline.js"></div>

To specify one or another series type, assign its name to the **series[]**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type') option. You can configure:

- Each series individually using the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array;
- All series in the **Chart** using the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object;
- All series of a specific type using objects nested in **commonSeriesSettings**: **line**, **spline**, **stepline**, etc.

<!---->

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "spline"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                line: { ... },
                spline: { ... },
                stepline: { ... },
                stackedline: { ... },
                stackedspline: { ... },
                fullstackedline: { ... },
                fullstackedspline: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series type="spline"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-line ... ></dxo-line>
            <dxo-spline ... ></dxo-spline>
            <dxo-stepline ... ></dxo-stepline>
            <dxo-stackedline ... ></dxo-stackedline>
            <dxo-stackedspline ... ></dxo-stackedspline>
            <dxo-fullstackedline ... ></dxo-fullstackedline>
            <dxo-fullstackedspline ... ></dxo-fullstackedspline>
        </dxo-common-series-settings>
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

Refer to the [Series Types](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/') section of the API Reference for a full list of options available to a specific series type.

<a href="/Demos/WidgetsGallery/Demo/Charts/Line/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">Line Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Charts/Spline/" class="button orange small fix-width-155" target="_blank">Spline Demo</a>

#####See Also#####
- [Series](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series/Overview/')
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')