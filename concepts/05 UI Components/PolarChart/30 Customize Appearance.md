To change series color, implement one of the following options:

- Specify a color [palette](/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes) for the component.
- Specify [color](/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/#color) for a series.
- Specify [color](/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonSeriesSettings/#color) for all series.

Besides color change, you can add a custom pattern or gradient fill to the following series:

- [Area](/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/AreaSeries/#color)
- [Bar](/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/BarSeries/#color)
- [Stacked bar](/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/StackedBarSeries/#color)

Use the [registerPattern()](/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions) or [registerGradient()](/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options) method to create a custom pattern or gradient.

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



