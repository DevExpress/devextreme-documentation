To change series color, use one of the following options:

- Specify a color [palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes') for the component.
- Specify a [color](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#color') for a series.
- Specify a [color](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#color') for all series.

Besides color change, you can add a custom pattern or gradient fill to the following series:

- [Area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/AreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/AreaSeries/#color')
- [Stacked area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StackedAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedAreaSeries/#color')
- [Full-stacked area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedAreaSeries/#color')
- [Spline area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineAreaSeries/#color')
- [Stacked spline area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StackedSplineAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedSplineAreaSeries/#color')
- [Full-stacked spline area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedSplineAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedSplineAreaSeries/#color')
- [Range area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeAreaSeries/#color')
- [Step area](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StepAreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StepAreaSeries/#color')
- [Bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/#color')
- [Stacked bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StackedBarSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StackedBarSeries/#color')
- [Full-stacked bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/FullStackedBarSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/FullStackedBarSeries/#color')
- [Range bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/RangeBarSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/#color')
- [Bubble](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BubbleSeries/color.md '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BubbleSeries/#color')

![Area chart with a gradient fill](/images/ChartJS/charts-color-gradients.png)

Use the [registerPattern()](/api-reference/50%20Common/utils/viz/registerPattern(options).md '/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions') or [registerGradient()](/api-reference/50%20Common/utils/viz/registerGradient(type_options).md '/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options') method to create a custom pattern or gradient.

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



