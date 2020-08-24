The legend can be aligned in the horizontal or vertical direction using the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#horizontalAlignment') or [verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#verticalAlignment') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            legend: {
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxo-legend
            horizontalAlignment="center" <!-- or "left" | "right" -->
            verticalAlignment="top"> <!-- or "bottom" -->
        </dxo-legend>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ... >
            <DxLegend
                horizontal-alignment="center" <!-- or "left" | "right" -->
                vertical-alignment="top" <!-- or "bottom" -->
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxLegend
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxLegend
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Legend
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Legend
                        horizontalAlignment="center" {/* or "left" | "right" */}
                        verticalAlignment="top" {/* or "bottom" */}
                    />
                </PieChart>
            );
        }
    }

---

Below, you can try out these options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/20_2/DataVisualization/Guides/PieChartLegend/relocateTheLegend.html, /Content/Applications/20_2/DataVisualization/Guides/PieChartLegend/relocateTheLegend.js, /Content/Applications/20_2/DataVisualization/Guides/PieChartLegend/relocateTheLegend.css"></div>

#####See Also#####
- [Rearrange Legend Items](/concepts/05%20Widgets/PieChart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/Widgets/PieChart/Legend/Rearrange_Legend_Items/')
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries)
