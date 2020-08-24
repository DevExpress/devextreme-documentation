To export the **PieChart** using the API, call the [exportTo(fileName, format)](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#exportTofileName_format') method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print the **PieChart**, call the [print()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#print') method. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var pieChart = $("#pieChartContainer").dxPieChart("instance");
    pieChart.exportTo('Exported Chart', 'PDF');
    pieChart.print();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        exportChart () {
            this.pieChart.instance.exportTo('Exported Chart', 'PDF');
        };
        printChart () {
            this.pieChart.instance.print();
        };
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
        methods: {
            exportChart() {
                this.$refs.pieChart.instance.exportTo('Exported Chart', 'PDF');
            },
            printChart() {
                this.$refs.pieChart.instance.print();
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

            this.exportChart = this.exportChart.bind(this);
            this.printChart = this.printChart.bind(this);
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

        exportChart() {
            this.pieChart.exportTo('Exported Chart', 'PDF');
        }
        printChart() {
            this.pieChart.print();
        }
    }

---

You can also export several widgets at once using their SVG markup. Gather the markup from all required widgets by calling the [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances') method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method.

---
##### jQuery

    <!--JavaScript-->
    var pieChart1 = $("#pieChartContainer1").dxPieChart("instance");
    var pieChart2 = $("#pieChartContainer2").dxPieChart("instance");
    var chartMarkup = DevExpress.viz.getMarkup([pieChart1, pieChart2]);
    
    DevExpress.viz.exportFromMarkup(chartMarkup, {
        height: 768,
        width: 1024,
        fileName: "Exported Charts",
        format: "PDF"
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    import exportMethods from "devextreme/viz/export";
    // ...
    export class AppComponent {
        @ViewChild('pieChartContainer1', { static: false }) pieChart1: DxPieChartComponent;
        @ViewChild('pieChartContainer2', { static: false }) pieChart2: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild('pieChartContainer1') pieChart1: DxPieChartComponent;
        // @ViewChild('pieChartContainer2') pieChart2: DxPieChartComponent;
        exportSeveralCharts () {
            const chartMarkup = exportMethods.getMarkup([this.pieChart1.instance, this.pieChart2.instance]);
            exportMethods.exportFromMarkup(chartMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Charts",
                format: "PDF"
            });
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pie-chart id="pieChartContainer1" ... ></dx-pie-chart>
    <dx-pie-chart id="pieChartContainer2" ... ></dx-pie-chart>

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ...
            ref="pieChart1">
        </DxPieChart>
        <DxPieChart ...
            ref="pieChart2">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';
    import exportMethods from "devextreme/viz/export";

    export default {
        components: {
            DxPieChart
        },
        methods: {
            exportSeveralCharts() {
                const pieChart1 = this.$refs.pieChart1.instance;
                const pieChart2 = this.$refs.pieChart2.instance;
                const chartMarkup = exportMethods.getMarkup([pieChart1, pieChart2]);
                exportMethods.exportFromMarkup(chartMarkup, {
                    height: 768,
                    width: 1024,
                    fileName: 'Exported Charts',
                    format: 'PDF';
                });
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

            this.pieChart1Ref = React.createRef();
            this.pieChart2Ref = React.createRef();

            this.exportSeveralCharts = this.exportSeveralCharts.bind(this);
        }

        render() {
            return (
                <PieChart ...
                    ref={this.pieChart1Ref}>
                </PieChart>
                <PieChart ...
                    ref={this.pieChart2Ref}>
                </PieChart>
            );
        }

        get pieChart1() {
            return this.pieChart1Ref.current.instance;
        }
        get pieChart2() {
            return this.pieChart2Ref.current.instance;
        }

        exportSeveralCharts() {
            const chartMarkup = exportMethods.getMarkup([this.pieChart1, this.pieChart2]);
            exportMethods.exportFromMarkup(chartMarkup, {
                height: 768,
                width: 1024,
                fileName: 'Exported Charts',
                format: 'PDF';
            });
        }
    }

---