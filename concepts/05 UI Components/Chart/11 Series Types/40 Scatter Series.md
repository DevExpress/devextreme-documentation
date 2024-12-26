The **Scatter** series type visualizes data as a collection of scattered points.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/scatter.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/scatter.js"></div>

To specify the **Scatter** series type, assign *"scatter"* to the **series[]**.[type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property. You can configure:

- Each series individually using the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array;
- All series in the Chart using the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object;
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxSeries type="scatter"/>
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings :scatter="scatterSettings"/>
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
                scatterSettings: { ... }
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

    const scatterSettings = { ... };

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series type="scatter" />
                    <Series ... />
                    ...
                    <CommonSeriesSettings scatter={scatterSettings} />
                </Chart>
            );
        }
    }

    export default App;

---

Refer to the [ScatterSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ScatterSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/ScatterSeries/') section of the API Reference for a full list of properties available to a **Scatter** series.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Scatter/"
}

#####See Also#####
- [Series Points](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/')
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
- [Bubble Series](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Bubble_Series/')
