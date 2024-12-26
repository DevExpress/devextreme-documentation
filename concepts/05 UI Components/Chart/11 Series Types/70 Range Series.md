**Range Area** and **Range Bar** series emphasize the difference between a point's high and low value using a shaded area or a set of bars respectively.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/range.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/range.js"></div>

Assign *"rangearea"* or *"rangebar"* to the **series[]**.[type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property to specify the corresponding series type. You can configure:

- Each series individually using the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array;
- All series in the Chart using the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object;
- All **Range Area** or **Range Bar** series using the **commonSeriesSettings**.**rangearea** or **commonSeriesSettings**.**rangebar** object respectively.

Note that the range series require two value fields: [rangeValue1Field](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/rangeValue1Field.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#rangeValue1Field') and [rangeValue2Field](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/rangeValue2Field.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#rangeValue2Field').

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "rangearea",
                rangeValue1Field: "low",
                rangeValue2Field: "high"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                rangearea: { ... },
                rangebar: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            type="rangearea"
            rangeValue1Field="low"
            rangeValue2Field="high">
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-rangearea ... ></dxo-rangearea>
            <dxo-rangebar ... ></dxo-rangebar>
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
            <DxSeries
                type="rangearea"
                range-value1-field="low"
                range-value2-field="high"
            />
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings
                :rangearea="rangeAreaSettings"
                :rangebar="rangeBarSettings"
            />
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
                rangeAreaSettings: { ... },
                rangeBarSettings: { ... }
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

    const rangeAreaSettings = { ... };
    const rangeBarSettings = { ... };

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series
                        type="rangearea"
                        rangeValue1Field="low"
                        rangeValue2Field="high"
                    />
                    <Series ... />
                    ...
                    <CommonSeriesSettings
                        rangearea={rangeAreaSettings}
                        rangebar={rangeBarSettings}
                    />
                </Chart>
            );
        }
    }

    export default App;

---

See the [RangeAreaSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/') and [RangeBarSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/') API Reference sections for a full list of properties available to a range series.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/RangeBar/",
    name: "Range Series"
}

#####See Also#####
- [Series](/concepts/05%20UI%20Components/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/')
- [Area Series](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Area_Series/')
- [Bar Series](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/')
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
