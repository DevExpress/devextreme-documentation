Bar series visualize data as a collection of bars. Those bars can be displayed side by side, as in the **Bar** series type, or can be put in stacks, as in the **Stacked Bar** and **Full-Stacked Bar** series types.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/bar.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/bar.js"></div>

To specify one or another series type, assign its name to the **series[]**.[type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property. You can configure:

- Each series individually using the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array;
- All series in the Chart using the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object;
- All series of a specific type using objects nested in **commonSeriesSettings**: **bar**, **stackedbar**, and **fullstackedbar**.

<!---->

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "bar"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                bar: { ... },
                stackedbar: { ... },
                fullstackedbar: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series type="bar"></dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-bar ... ></dxo-bar>
            <dxo-stackedbar ... ></dxo-stackedbar>
            <dxo-fullstackedbar ... ></dxo-fullstackedbar>
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
            <DxSeries type="bar"/>
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings
                :bar="barSettings"
                :stackedbar="stackedBarSettings"
                :fullstackedbar="fullStackedBarSettings"
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
                barSettings: { ... },
                stackedBarSettings: { ... },
                fullStackedBarSettings: { ... }
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

    const barSettings = { ... };
    const stackedBarSettings = { ... };
    const fullStackedBarSettings = { ... };

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series type="bar" />
                    <Series ... />
                    ...
                    <CommonSeriesSettings
                        bar={barSettings}
                        stackedbar={stackedBarSettings}
                        fullstackedbar={fullStackedBarSettings}
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Refer to the [BarSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/'), [StackedBarSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedBarSeries/'), or [FullStackedBarSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedBarSeries/') section of the API Reference for a full list of properties available to a specific series type. Most these properties are self-explanatory, yet several of them are worth special mention.

- [minBarSize](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/minBarSize.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#minBarSize')      
Specifies the minimum height of bars in a series; allows you to keep bars big enough for user interaction.
- [stack](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/stack.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#stack') (for stacked series)        
Allows you to distribute bars of a single argument between several side-by-side stacks.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StandardBar/",
    name: "Bar Series"
}

#####See Also#####
- [Series Points](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/')
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
- [Range Series](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Range_Series/')
- [Bi-Directional Bar Chart](/concepts/05%20UI%20Components/Chart/92%20Bi-Directional%20Bar%20Chart/00%20Bi-Directional%20Bar%20Chart.md '/Documentation/Guide/UI_Components/Chart/Bi-Directional_Bar_Chart/')
