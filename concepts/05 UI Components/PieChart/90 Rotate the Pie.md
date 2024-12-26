The PieChart provides two properties that control the layout algorithm, allowing you to rotate the pie. The first is [startAngle](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/startAngle.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#startAngle') that specifies the angle at which to lay out the first pie slice and has a value of zero degrees by default. Decreasing this value rotates the pie clockwise; increasing it does the opposite. The second property is [segmentsDirection](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/segmentsDirection.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#segmentsDirection') that specifies the direction - clockwise or anticlockwise - in which the slices are laid out.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            startAngle: 45,
            segmentsDirection: "anticlockwise" // or "clockwise"
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        [startAngle]="45"
        segmentsDirection="anticlockwise"> <!-- or "clockwise" -->
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
        <DxPieChart ...
            :start-angle="45"
            segments-direction="anticlockwise"> <!-- or "clockwise" -->
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    startAngle={45}
                    segmentsDirection="anticlockwise"> {/* or "clockwise" */}
                </PieChart>
            );
        }
    }

---

You can try both these properties on the PieChart below.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/PieChartRotate/rotatePie.html, /Content/Applications/25_1/DataVisualization/Guides/PieChartRotate/rotatePie.js, /Content/Applications/25_1/DataVisualization/Guides/PieChartRotate/rotatePie.css"></div>

#####See Also#####
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie)
