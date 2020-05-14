Labels are located beside their series points by default. Change the **series**.**label**.[position](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position') option to rearrange labels in columns or place them inside series points.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    position: "columns" // or "inside" | "outside"
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ... >
        <dxi-series>
            <dxo-label
                position="columns"> <!-- or "inside" | "outside" -->
            </dxo-label>
        </dxi-series>
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
            <DxSeries>
                <DxLabel position="columns"/> <!-- or "inside" | "outside" -->
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxLabel
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        Label
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series>
                        <Label position="columns" /> {/* or "inside" | "outside" */}
                    </Series>
                </PieChart>
            );
        }
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithCustomLabels/"
}

#####See Also#####
- [Resolve Label Overlapping](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/')