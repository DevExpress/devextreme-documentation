**Candlestick** and **Stock** are financial series types used to describe and analyse trading patterns over short periods of time. Each point in a **Candlestick** series is composed of a real body and two wicks. The real body illustrates the opening and closing trades; it is filled if the closing price is lower than the opening price, and empty otherwise. The wicks visualize the highest and lowest traded prices during the day. A **Stock** series is similar to **Candlestick** except that the opening and closing trades are illustrated by markers instead of the real body.


<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/financial.html, /Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/financial.js"></div>

Assign *"candlestick"* or *"stock"* to the **series[]**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type') option to specify the corresponding series type. You can configure:

- Each series individually using the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array;
- All series in the **Chart** using the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object;
- All **Candlestick** or **Stock** series using the **commonSeriesSettings**.**candlestick** or **commonSeriesSettings**.**stock** object respectively.

Note that the financial series require four value fields: [openValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/openValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#openValueField'), [closeValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/closeValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#closeValueField'), [highValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/highValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#highValueField'), and [lowValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/lowValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#lowValueField').

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "candlestick",
                openValueField: "o",
                closeValueField: "c",
                highValueField: "h",
                lowValueField: "l"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                candlestick: { ... },
                stock: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            type="candlestick"
            openValueField="o"
            closeValueField="c"
            highValueField="h"
            lowValueField="l">
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-candlestick ... ></dxo-candlestick>
            <dxo-stock ... ></dxo-stock>
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

Financial series gauge price reduction by comparing the values of two neighboring points. Use the **reduction**.[level](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/reduction/level.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/reduction/#level') option to specify whether it should be the open, close, high, or low values. The **reduction**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/reduction/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/reduction/#color') colors points whose value decreases.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                // ...
                reduction: {
                    level: "high",
                    color: "blue"
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-reduction level="high" color="blue"></dxo-reduction>
        </dxi-series>
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

See the [CandleStickSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') and [StockSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/') API Reference sections for a full list of options available to a financial series.

<a href="/Demos/WidgetsGallery/Demo/Charts/Stock/" class="button orange small fix-width-155" target="_blank">Financial Series Demos</a>

#####See Also#####
- [Series](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series/Overview/')
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
