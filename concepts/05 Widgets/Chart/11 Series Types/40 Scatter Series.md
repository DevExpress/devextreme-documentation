The **Scatter** series type visualizes data as a collection of scattered points.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/scatter.html, /Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/scatter.js"></div>

To specify the **Scatter** series type, assign *"scatter"* to the **series[]**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type') option. You can configure:

- Each series individually using the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array;
- All series in the **Chart** using the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object;
- All **Scatter** series using the **commonSeriesSettings**.**scatter** object.

<!---->

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "scatter"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                scatter: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series type="scatter"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-scatter ... ></dxo-scatter>
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

Refer to the [ScatterSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ScatterSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/ScatterSeries/') section of the API Reference for a full list of options available to a **Scatter** series.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Scatter/"
}

#####See Also#####
- [Series Points](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series_Points/Overview/')
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
- [Bubble Series](/concepts/05%20Widgets/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/')