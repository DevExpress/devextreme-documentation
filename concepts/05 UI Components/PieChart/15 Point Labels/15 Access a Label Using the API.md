[note] Before accessing a point label, you must gain access to its series point. You can learn the details in the [Access a Point Using the API](/concepts/05%20UI%20Components/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/PieChart/Series/Access_a_Point_Using_the_API/') topic.

To access a point label, call the [getLabel()](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point/3%20Methods/getLabel().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#getLabel') method of its series point. This method returns an object described in the [Label](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Label '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Label/') section of the API reference.

---
##### jQuery

    <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];
    var seriesPoints = series.getAllPoints();
    var label = seriesPoints[0].getLabel();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        label: any = {};
        getPointLabel () {
            const series = this.pieChart.instance.getAllSeries()[0];
            const seriesPoints = series.getAllPoints();
            this.label = seriesPoints[0].getLabel();
        }
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
            ref="pieChart">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        data() {
            return {
                label: {}
            };
        },
        methods: {
            getPointLabel() {
                const series = this.$refs.pieChart.instance.getAllSeries()[0];
                const seriesPoints = series.getAllPoints();
                this.label = seriesPoints[0].getLabel();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import PieChart, { type PieChartRef } from 'devextreme-react/pie-chart';
    import type { baseLabelObject } from 'devextreme/viz/chart';

    function App() {
        const pieChartRef = useRef<PieChartRef>(null);
        const labelRef = useRef<baseLabelObject | undefined>(undefined);

        const getPointLabel = useCallback(() => {
            const pieChart = pieChartRef.current?.instance();
            const series = pieChart?.getAllSeries()[0];
            const seriesPoints = series?.getAllPoints();
            labelRef.current = seriesPoints?.[0].getLabel();
        }, []);

        return (
            <PieChart ...
                ref={pieChartRef}>
            </PieChart>
        );
    }

    export default App;

---

Once you access a label, you can, for example, hide or show it by calling the **hide()** or **show()** method.

    <!--JavaScript-->label.hide();
    // label.show();

#####See Also#####
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie/)