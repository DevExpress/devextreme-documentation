To change the color of a series, use one of the following options:

- Specify the color [palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Components%20Customization/10%20Palettes/00%20Palettes.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes') for the component.
- Specify the [color](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#color) for a series.
- Specify the [color](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/#color) for all series.

You can also add a custom pattern or gradient fill to the series.

Use the [registerPattern()](/api-reference/50%20Common/utils/viz/registerPattern(options).md '/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions') or [registerGradient()](/api-reference/50%20Common/utils/viz/registerGradient(type_options).md '/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options') method to create a custom pattern or gradient.

The following example adds a gradient to all series in a PieChart:

---

##### jQuery

    <!-- tab: index.js -->
    const registerGradient = DevExpress.common.charts.registerGradient;
    
    $(() => {
        $('#polarChart').dxPieChart({
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
        <DxPieChart ... >
            <DxCommonSeriesSettings 
                :color="seriesColor"
            />
        </DxPieChart>
    </template>
    <script>
        import DxPieChart, { DxCommonSeriesSettings } from 'devextreme-vue/chart';
        import { registerGradient } from 'devextreme/common/charts';

        export default {
            components: {
                DxPieChart,
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
        <DxPieChart ... >
            <DxCommonSeriesSettings 
                :color="seriesColor"
            />
        </DxPieChart>
    </template>
    <script setup>
        import DxPieChart, { DxCommonSeriesSettings } from 'devextreme-vue/chart';
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
    import PieChart, { CommonSeriesSettings } from 'devextreme-react/chart';
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
            <PieChart ... >
                <CommonSeriesSettings 
                    color={seriesColor}
                />
            </PieChart>
        );
    }

---



