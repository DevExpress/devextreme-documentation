The **Bubble** series type visualizes data as individual points of different sizes called "bubbles". Because **Bubble** series have the additional size characteristic, they can convey more information than, for example, [Line](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Line_Series/') or [Scatter](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/40%20Scatter%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Scatter_Series/') series.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/bubble.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/bubble.js"></div>

Assign *"bubble"* to the **series[]**.[type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property to specify the **Bubble** series type. You can configure:

- Each series individually using the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array;
- All series in the Chart using the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object;
- All **Bubble** series using the **commonSeriesSettings**.**bubble** object.

Note that **Bubble** series require an additional data field that provides size values. Assign its name to the **series[]**.[sizeField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/sizeField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#sizeField') property. Based on the size values, the UI component calculates the actual bubble sizes in pixels, ranging between [minBubbleSize](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/minBubbleSize.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#minBubbleSize') and [maxBubbleSize](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/maxBubbleSize.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#maxBubbleSize').

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
            maxBubbleSize: 0.3 // in fractions of the UI component's height or width, depending on which is smaller
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ...
            :min-bubble-size="14"
            :max-bubble-size="0.3">
            <DxSeries
                type="bubble"
                size-field="size"
            />
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings :bubble="bubbleSettings"/>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxCommonSeriesSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCommonSeriesSettings
        },
        data() {
            return {
                bubbleSettings: { ... }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        CommonSeriesSettings
    } from 'devextreme-react/chart';

    const bubbleSettings = { ... };

    class App extends React.Component {
        render() {
            return (
                <Chart ...
                    minBubbleSize={14}
                    maxBubbleSize={0.3}>
                    <Series
                        type="bubble"
                        sizeField="size"
                    />
                    <Series ... />
                    ...
                    <CommonSeriesSettings bubble={bubbleSettings} />
                </Chart>
            );
        }
    }

    export default App;

---

Refer to the [BubbleSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BubbleSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BubbleSeries/') section of the API Reference for a full list of properties available to a **Bubble** series.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Bubble/"
}

#####See Also#####
- [Series Points](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/')
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
