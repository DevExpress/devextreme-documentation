To export the PieChart using the API, call the [exportTo(fileName, format)](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#exportTofileName_format') method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print the PieChart, call the [print()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#print') method. This command opens the browser's **Print** window.

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

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import PieChart, { type PieChartRef } from 'devextreme-react/pie-chart';

    function App() {
        const pieChartRef = useRef<PieChartRef>(null);

        const exportChart = useCallback(() => {
            const pieChart = pieChartRef.current?.instance();
            pieChart?.exportTo('Exported Chart', 'PDF');
        }, []);

        const printChart = useCallback(() => {
            const pieChart = pieChartRef.current?.instance();
            pieChart?.print();
        }, []);

        return (
            <PieChart ...
                ref={pieChartRef}>
            </PieChart>
        );
    }

    export default App;

---

You can also export several UI components at once using their SVG markup. Gather the markup from all required UI components by calling the [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances') method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method.

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
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";
    // ...
    export class AppComponent {
        @ViewChild('pieChartContainer1', { static: false }) pieChart1: DxPieChartComponent;
        @ViewChild('pieChartContainer2', { static: false }) pieChart2: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild('pieChartContainer1') pieChart1: DxPieChartComponent;
        // @ViewChild('pieChartContainer2') pieChart2: DxPieChartComponent;
        exportSeveralCharts () {
            const chartMarkup = getMarkup([this.pieChart1.instance, this.pieChart2.instance]);
            exportFromMarkup(chartMarkup, {
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
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";

    export default {
        components: {
            DxPieChart
        },
        methods: {
            exportSeveralCharts() {
                const pieChart1 = this.$refs.pieChart1.instance;
                const pieChart2 = this.$refs.pieChart2.instance;
                const chartMarkup = getMarkup([pieChart1, pieChart2]);
                exportFromMarkup(chartMarkup, {
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

    <!-- tab: App.tsx -->
    import React, { useCallback, useRef } from 'react';
    import PieChart, { type PieChartRef } from 'devextreme-react/pie-chart';
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";

    function App() {
        const pieChart1Ref = useRef<PieChartRef>(null);
        const pieChart2Ref = useRef<PieChartRef>(null);

        const exportSeveralCharts = useCallback(() => {
            const pieChart1 = pieChart1Ref.current?.instance();
            const pieChart2 = pieChart2Ref.current?.instance();
            if (!pieChart1 || !pieChart2) {
                return;
            }
            const chartMarkup = getMarkup([pieChart1, pieChart2]);
            exportFromMarkup(chartMarkup, {
                height: 768,
                width: 1024,
                fileName: 'Exported Charts',
                format: 'PDF'
            });
        }, []);

        return (
            <>
                <PieChart ...
                    ref={pieChart1Ref}>
                </PieChart>
                <PieChart ...
                    ref={pieChart2Ref}>
                </PieChart>
            </>
        );
    }

    export default App;

---