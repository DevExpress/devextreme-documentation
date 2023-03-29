You can add a custom pattern or gradient fill to the following series:

- [Area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/AreaSeries/#color)
- [Stacked area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedAreaSeries/#color)
- [Full-stacked area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedAreaSeries/#color)
- [Spline area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineAreaSeries/#color)
- [Stacked spline area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedSplineAreaSeries/#color)
- [Full-stacked spline area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedSplineAreaSeries/#color)
- [Range area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/#color)
- [Step area](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StepAreaSeries/#color)
- [Bar](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/#color)
- [Stacked bar](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedBarSeries/#color)
- [Full-stacked bar](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedBarSeries/#color)
- [Range bar](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/#color)
- [Bubble](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BubbleSeries/#color)

![Area chart with a gradient fill](/images/ChartJS/charts-color-gradients.png)

Use the [registerPattern()](/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions) or [registerGradient()](/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options) method to create a custom pattern or gradient.

The following example adds a gradient to all series in a Chart:

---

##### jQuery

    <!-- tab: index.js -->
    const registerGradient = DevExpress.common.charts.registerGradient;
    
    $(() => {
        $('#chart').dxChart({
            // ...
            commonSeriesSettings: {
                color: {
                    base: "#f5564a",
                    fillId: registerGradient("linear", {
                        colors: [{
                            offset: "20%",
                            color: "#97c95c"
                        }, {
                            offset: "90%",
                            color: "#eb3573"
                        }]
                    })
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-common-series-settings [color]="seriesColor">
        </dxo-common-series-settings>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { registerGradient } from "devextreme/common/charts";

    export class AppComponent {
        seriesColor = {
            base: "#f5564a",
            fillId: registerGradient("linear", {
                colors: [{
                    offset: "20%",
                    color: "#97c95c"
                }, {
                    offset: "90%",
                    color: "#eb3573"
                }]
            });
        };
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxChart ... >
            <DxCommonSeriesSettings 
                :color="seriesColor"
            />
        </DxChart>
    </template>
    <script>
        import DxChart, { DxCommonSeriesSettings } from 'devextreme-vue/chart';
        import { registerGradient } from 'devextreme/common/charts';

        export default {
            components: {
                DxChart,
                DxCommonSeriesSettings
            },
            data() {
                return {
                    // ...
                    seriesColor: {
                        base: '#f5564a',
                        fillId: registerGradient("linear", {
                            colors: [{
                                offset: "20%",
                                color: "#97c95c"
                            }, {
                                offset: "90%",
                                color: "#eb3573"
                            }]
                        })
                    }
                }
            }
        };
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxChart ... >
            <DxCommonSeriesSettings 
                :color="seriesColor"
            />
        </DxChart>
    </template>
    <script setup>
        import DxChart, { DxCommonSeriesSettings } from 'devextreme-vue/chart';
        import { registerGradient } from 'devextreme/common/charts';

        // ...

        const seriesColor = {
            base: '#f5564a',
            fillId: registerGradient("linear", {
                colors: [{
                    offset: "20%",
                    color: "#97c95c"
                }, {
                    offset: "90%",
                    color: "#eb3573"
                }]
            })
        };
    </script>

##### React

    <!-- tab: App.js -->
    import Chart, { CommonSeriesSettings } from 'devextreme-react/chart';
    import { registerGradient } from 'devextreme/common/charts';

    const seriesColor = {
        base: "#f5564a",
        fillId: registerGradient("linear", {
            colors: [{
                offset: "20%",
                color: "#97c95c"
            }, {
                offset: "90%",
                color: "#eb3573"
            }]
        })
    };

    export default function App() {
        return (
            <Chart ... >
                <CommonSeriesSettings 
                    color={seriesColor}
                />
            </Chart>
        );
    }

---



