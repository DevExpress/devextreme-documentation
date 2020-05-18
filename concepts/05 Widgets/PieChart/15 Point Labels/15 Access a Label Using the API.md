[note] Before accessing a point label, you must gain access to its series point. You can learn the details in the [Access a Point Using the API](/concepts/05%20Widgets/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/') topic.

To access a point label, call the [getLabel()](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point/3%20Methods/getLabel().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#getLabel') method of its series point. This method returns an object described in the [Label](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Label/') section of the API reference.

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

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.pieChartRef = React.createRef();
            this.label = {};

            this.getPointLabel = this.getPointLabel.bind(this);
        }

        render() {
            return (
                <PieChart ...
                    ref={this.pieChartRef}>
                </PieChart>
            );
        }

        get pieChart() {
            return this.pieChartRef.current.instance;
        }

        getPointLabel() {
            const series = this.pieChart.getAllSeries()[0];
            const seriesPoints = series.getAllPoints();
            this.label = seriesPoints[0].getLabel();
        }
    }

---

Once you access a label, you can, for example, hide or show it by calling the **hide()** or **show()** method.

    <!--JavaScript-->label.hide();
    // label.show();

#####See Also#####
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie)