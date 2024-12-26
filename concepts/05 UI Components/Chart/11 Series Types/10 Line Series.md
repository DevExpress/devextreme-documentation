Line series visualize data as a collection of points connected by a line. This line can be broken, smooth, or step-like, which corresponds to the **Line**, **Spline**, and **Step Line** series types.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/line.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/line.js"></div>

Line series also include stacked series types: **Stacked Line** and **Stacked Spline**. In such series, the value of each next point is counted off from the previous point with the same argument. As a result, series are put in a stack. Very similar to stacked series are full-stacked series - **Full-Stacked Line** and **Full-Stacked Spline**. In these series, the sum of all point values by a given argument is considered 100%, and each individual point value is recalculated to be a share of these 100%.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/stackedline.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/stackedline.js"></div>

To specify one or another series type, assign its name to the **series[]**.[type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property. You can configure:

- Each series individually using the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array;
- All series in the Chart using the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object;
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxSeries type="spline"/>
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings
                :line="lineSettings"
                :spline="splineSettings"
                :stepline="stepLineSettings"
                :stackedline="stackedLineSettings"
                :stackedspline="stackedSplineSettings"
                :fullstackedline="fullStackedLineSettings"
                :fullstackedspline="fullStackedSplineSettings"
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
                lineSettings: { ... },
                splineSettings: { ... },
                stepLineSettings: { ... },
                stackedLineSettings: { ... },
                stackedSplineSettings: { ... },
                fullStackedLineSettings: { ... },
                fullStackedSplineSettings: { ... }
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

    const lineSettings = { ... };
    const splineSettings = { ... };
    const stepLineSettings = { ... };
    const stackedLineSettings = { ... };
    const stackedSplineSettings = { ... };
    const fullStackedLineSettings = { ... };
    const fullStackedSplineSettings = { ... };

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series type="spline" />
                    <Series ... />
                    ...
                    <CommonSeriesSettings
                        line={lineSettings}
                        spline={splineSettings}
                        stepline={stepLineSettings}
                        stackedline={stackedLineSettings}
                        stackedspline={stackedSplineSettings}
                        fullstackedline={fullStackedLineSettings}
                        fullstackedspline={fullStackedSplineSettings}
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Refer to the [Series Types](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/') section of the API Reference for a full list of properties available to a specific series type.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Line/",
    name: "Line Series"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Spline/",
    name: "Spline Series"
}

#####See Also#####
- [Series](/concepts/05%20UI%20Components/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/')
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
