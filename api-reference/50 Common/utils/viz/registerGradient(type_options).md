---
id: viz.registerGradient(type, options)
module: common/charts
export: registerGradient
---
---
##### shortDescription
Registers a new gradient.

##### return: String
The fill id.

##### param(type): String
The gradient type: 'linear' or 'radial'.

##### param(options): Object
The gradient's settings.

##### field(options.colors): Array<GradientColor>
The array of gradient colors.

##### field(options.rotationAngle): Number
The rotation angle for linear gradients.

---
Implement this method to register a gradient id. Then, use the id in the component color.[fillId](/Documentation/ApiReference/Common_Types/charts/ChartsColor/#fillId) field.

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#chart').dxChart({
            // ...
            commonSeriesSettings: {
                color: {
                    base: "#f5564a",
                    fillId: DevExpress.common.charts.registerGradient("linear", {
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
                        base: '#000000',
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
            base: '#000000',
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

    function App() {
        return (
            <Chart ... >
                <CommonSeriesSettings 
                    color={seriesColor}
                />
            </Chart>
        );
    }

---

[note]

- To correctly export a component with transparent gradient, specify gradient colors in the RGBA format.

- Radial and rotated linear gradients may look slightly different when exported. 

[/note]