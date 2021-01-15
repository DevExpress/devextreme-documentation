The legend is a chart component that helps a user identify series. It contains several colored items, one per series. 

![DevExtreme HTML5 JavaScript Charts Legend](/images/ChartJS/visual_elements/legend.png)

To configure the appearance, location, and content of the legend, use options collected in the [legend](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/legend '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/') object. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-legend ... ></dxo-legend>
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
            <DxLegend ... />
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
                    <Legend ... />
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Relocate the Legend](/concepts/05%20UI%20Components/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/UI_Components/Chart/Legend/Relocate_the_Legend/')
- [Rearrange Legend Items](/concepts/05%20UI%20Components/Chart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/UI_Components/Chart/Legend/Rearrange_Legend_Items/')
- [User Interaction with the Legend](/concepts/05%20UI%20Components/Chart/35%20Legend/30%20User%20Interaction.md '/Documentation/Guide/UI_Components/Chart/Legend/User_Interaction/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, legend, overview