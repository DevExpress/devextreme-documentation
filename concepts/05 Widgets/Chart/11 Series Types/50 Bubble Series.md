The **Bubble** series type visualizes data as individual points of different sizes called "bubbles". Because **Bubble** series have the additional size characteristic, they can convey more information than, for example, [Line](/concepts/05%20Widgets/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/') or [Scatter](/concepts/05%20Widgets/Chart/11%20Series%20Types/40%20Scatter%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Scatter_Series/') series.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/bubble.html, /Content/Applications/19_2/DataVisualization/Guides/ChartSeriesTypes/bubble.js"></div>

Assign *"bubble"* to the **series[]**.[type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#type') option to specify the **Bubble** series type. You can configure:

- Each series individually using the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array;
- All series in the **Chart** using the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object;
- All **Bubble** series using the **commonSeriesSettings**.**bubble** object.

Note that **Bubble** series require an additional data field that provides size values. Assign its name to the **series[]**.[sizeField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/sizeField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#sizeField') option. Based on the size values, the widget calculates the actual bubble sizes in pixels, ranging between [minBubbleSize](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/minBubbleSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#minBubbleSize') and [maxBubbleSize](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/maxBubbleSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#maxBubbleSize').

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "bubble",
                sizeField: "size"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                bubble: { ... }
            },
            minBubbleSize: 14, // in pixels
            maxBubbleSize: 0.3 // in fractions of the widget's height or width, depending on which is smaller
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        [minBubbleSize]="14"
        [maxBubbleSize]="0.3">
        <dxi-series type="bubble" sizeField="size"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-bubble ... ></dxo-bubble>
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

Refer to the [BubbleSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/BubbleSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/') section of the API Reference for a full list of options available to a **Bubble** series.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Bubble/"
}

#####See Also#####
- [Series Points](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series_Points/Overview/')
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
