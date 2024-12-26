The legend can be moved inside the chart using the [position](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/legend/position.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#position') property, and also aligned in the horizontal or vertical direction using the [horizontalAlignment](/api-reference/10%20UI%20Components/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#horizontalAlignment') or [verticalAlignment](/api-reference/10%20UI%20Components/BaseLegend/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#verticalAlignment') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                position: "inside", // or "outside"
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend
            position="inside"
            horizontalAlignment="center"
            verticalAlignment="top">
        </dxo-legend>
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
            <DxLegend
                position="inside"
                horizontal-alignment="center"
                vertical-alignment="top"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxLegend
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxLegend
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Legend
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Legend
                        position="inside"
                        horizontalAlignment="center"
                        verticalAlignment="top"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Below, you can try out these properties in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/Legend/relocateTheLegend.html, /Content/Applications/25_1/DataVisualization/Guides/Legend/relocateTheLegend.js, /Content/Applications/25_1/DataVisualization/Guides/Legend/relocateTheLegend.css"></div>

#####See Also#####
- [Rearrange Legend Items](/concepts/05%20UI%20Components/Chart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/UI_Components/Chart/Legend/Rearrange_Legend_Items/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, legend, position, horizontal alignment, horizontalAlignment, vertical alignment, verticalAlignment, move the legend
