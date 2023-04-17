To change series color, use one of the following options:

- Specify a color [palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes') for the component.
- Specify a [color](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/#color') for a series.
- Specify a [color](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonSeriesSettings/#color') for all series.

Besides color change, you can add a custom pattern or gradient fill to the following series:

- [Area](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/AreaSeries/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/AreaSeries/#color')
- [Bar](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/BarSeries/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/BarSeries/#color')
- [Stacked bar](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/StackedBarSeries/color.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/StackedBarSeries/#color')

Use the [registerPattern()](/api-reference/50%20Common/utils/viz/registerPattern(options).md '/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions') or [registerGradient()](/api-reference/50%20Common/utils/viz/registerGradient(type_options).md '/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options') method to create a custom pattern or gradient.

The following example adds a gradient to all series in a PolarChart:

---

##### jQuery

    <!-- tab: index.js -->
    const registerGradient = DevExpress.common.charts.registerGradient;
    
    $(() => {
        $('#polarChart').dxPolarChart({
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
    <dx-polar-chart ... >
        <dxo-common-series-settings [color]="seriesColor">
        </dxo-common-series-settings>
    </dx-polar-chart>

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
        <DxPolarChart ... >
            <DxCommonSeriesSettings 
                :color="seriesColor"
            />
        </DxPolarChart>
    </template>
    <script>
        import DxPolarChart, { DxCommonSeriesSettings } from 'devextreme-vue/chart';
        import { registerGradient } from 'devextreme/common/charts';

        export default {
            components: {
                DxPolarChart,
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
        <DxPolarChart ... >
            <DxCommonSeriesSettings 
                :color="seriesColor"
            />
        </DxPolarChart>
    </template>
    <script setup>
        import DxPolarChart, { DxCommonSeriesSettings } from 'devextreme-vue/chart';
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
    import PolarChart, { CommonSeriesSettings } from 'devextreme-react/chart';
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
            <PolarChart ... >
                <CommonSeriesSettings 
                    color={seriesColor}
                />
            </PolarChart>
        );
    }

---



