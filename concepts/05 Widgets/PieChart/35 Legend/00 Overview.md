The legend is a component that helps a user identify series points. It contains several colored items, one per point (or per several points with the same argument in a multi-series **PieChart**). 

![DevExtreme HTML5 JavaScript PieChart Legend](/images/PieChart/visual_elements/legend.png)

To configure the appearance, location, and content of the legend, use options collected in the [legend](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/legend '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/') object. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            legend: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-legend ... ></dxo-legend>
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
            <DxLegend ... />
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
                    <Legend ... />
                </PieChart>
            );
        }
    }

---

#####See Also#####
- [Relocate the Legend](/concepts/05%20Widgets/PieChart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/PieChart/Legend/Relocate_the_Legend/')
- [Rearrange Legend Items](/concepts/05%20Widgets/PieChart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/Widgets/PieChart/Legend/Rearrange_Legend_Items/')
- [User Interaction with the Legend](/concepts/05%20Widgets/PieChart/35%20Legend/30%20User%20Interaction.md '/Documentation/Guide/Widgets/PieChart/Legend/User_Interaction/')