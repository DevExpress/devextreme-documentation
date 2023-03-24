---
id: viz.registerPattern(options)
module: common/charts
export: registerPattern
---
---
##### shortDescription
Registers a new pattern.

##### return: String
The fill id.

##### param(options): Object
The pattern settings.

##### field(options.height): Number | String
The pattern height.

##### field(options.template): template
The SVG-based pattern template.

##### field(options.width): Number | String
The pattern width.

---
Implement this method to register a pattern id. Then, use the id in the component color.[fillId](/Documentation/ApiReference/Common_Types/charts/ChartsColor/#fillId) field.

The following example demonstrates how to create a stroke pattern. Use a [d](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) SVG attribute to draw a path for a pattern.

---

##### jQuery

    <!-- tab: index.js -->
    const registerPattern = DevExpress.common.charts.registerPattern;

    $(() => {
        $('#chart').dxChart({
            // ...
            commonSeriesSettings: {
                color: {
                    base: "#f5564a",
                    fillId: registerPattern({
                        width: 5,
                        height: 5,
                        template: (container) => {
                            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            path.setAttribute('stroke', '#97c95c');
                            path.setAttribute('stroke-width', 1.5);
                            path.setAttribute('d', `M 2.5 -2.5 L -2.5 2.5 M 0 5 L 5 0 M 7.5 2.5 L 2.5 7.5`);
                            container.appendChild(path);
                        },
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
    import { registerPattern } from "devextreme/common/charts";

    export class AppComponent {
        seriesColor = {
            base: "#f5564a",
            fillId: registerPattern({
                width: 5,
                height: 5,
                template: (container) => {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('stroke', '#97c95c');
                    path.setAttribute('stroke-width', 1.5);
                    path.setAttribute('d', `M 2.5 -2.5 L -2.5 2.5 M 0 5 L 5 0 M 7.5 2.5 L 2.5 7.5`);
                    container.appendChild(path);
                },
            })
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
        import { registerPattern } from 'devextreme/common/charts';

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
                        fillId: registerPattern({
                            width: 5,
                            height: 5,
                            template: (container) => {
                                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                path.setAttribute('stroke', '#97c95c');
                                path.setAttribute('stroke-width', 1.5);
                                path.setAttribute('d', `M 2.5 -2.5 L -2.5 2.5 M 0 5 L 5 0 M 7.5 2.5 L 2.5 7.5`);
                                container.appendChild(path);
                            },
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
        import { registerPattern } from 'devextreme/common/charts';

        // ...

        const seriesColor = {
            base: '#f5564a',
            fillId: registerPattern({
                width: 5,
                height: 5,
                template: (container) => {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('stroke', '#97c95c');
                    path.setAttribute('stroke-width', 1.5);
                    path.setAttribute('d', `M 2.5 -2.5 L -2.5 2.5 M 0 5 L 5 0 M 7.5 2.5 L 2.5 7.5`);
                    container.appendChild(path);
                },
            })
        };
    </script>

##### React

    <!-- tab: App.js -->
    import Chart, { CommonSeriesSettings } from 'devextreme-react/chart';
    import { registerPattern } from 'devextreme/common/charts';

    const seriesColor = {
        base: "#f5564a",
        fillId: registerPattern({
            width: 5,
            height: 5,
            template: (container) => {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke', '#97c95c');
                path.setAttribute('stroke-width', 1.5);
                path.setAttribute('d', `M 2.5 -2.5 L -2.5 2.5 M 0 5 L 5 0 M 7.5 2.5 L 2.5 7.5`);
                container.appendChild(path);
            },
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

[note] If you specify width and height of a pattern in percents, the exported component may look different. 