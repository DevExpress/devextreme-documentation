Labels are located beside their series points by default. Change the **series**.**label**.[position](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#position') property to rearrange labels in columns or place them inside series points.

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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithCustomLabels/"
}

#####See Also#####
- [Resolve Label Overlapping](/concepts/05%20UI%20Components/PieChart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/UI_Components/PieChart/Point_Labels/Resolve_Overlapping/')