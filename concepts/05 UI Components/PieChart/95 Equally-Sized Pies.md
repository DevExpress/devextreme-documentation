The PieChart UI component comprises of a pie and other elements which can affect the pie's size. This means that pies in several side-by-side **PieCharts** may differ in size. Collect all these UI components in a single size group by setting their [sizeGroup](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/sizeGroup.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#sizeGroup') properties to identical values to avoid this.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer1").dxPieChart({
            // ...
            sizeGroup: "pies"
        });

        $("#pieChartContainer2").dxPieChart({
            // ...
            sizeGroup: "pies"
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        id="pieChartContainer1"
        sizeGroup="pies">
    </dx-pie-chart>

    <dx-pie-chart ...
        id="pieChartContainer2"
        sizeGroup="pies">
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
            id="pieChartContainer1"
            size-group="pies">
        </DxPieChart>
        <DxPieChart ...
            id="pieChartContainer2"
            size-group="pies">
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
                    id="pieChartContainer1"
                    sizeGroup="pies">
                </PieChart>
                <PieChart ...
                    id="pieChartContainer2"
                    sizeGroup="pies">
                </PieChart>
            );
        }
    }

---

The UI components should have identical layouts, that is, the same container size, [title](/concepts/05%20UI%20Components/PieChart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/UI_Components/PieChart/Title_and_Subtitle/') and [legend](/concepts/05%20UI%20Components/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/PieChart/Legend/Overview/') position, etc. Note also that a single page can contain many size groups, but a UI component can be a member of only one of them.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PiesWithEqualSize/"
}
