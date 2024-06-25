To export a UI component using the API, call the [exportTo(fileName, format)](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/exportTo(fileName_format).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#exportTofileName_format') method passing the needed file name and format (*"PNG"*, *"PDF"*, *"JPEG"*, *"SVG"* or *"GIF"*) as the arguments. To print a UI component, call the [print()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/print().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#print') method. This command opens the browser's **Print** window.

---
##### jQuery

    <!--JavaScript-->
    var chart = $("#chartContainer").dxChart("instance");
    chart.exportTo('Exported Chart', 'PDF');
    chart.print();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        exportChart () {
            this.chart.instance.exportTo('Exported Chart', 'PDF');
        };
        printChart () {
            this.chart.instance.print();
        };
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
        <DxChart
            ref="chart"
            ... >
            <DxExport :enabled="true"/>
        </DxChart>
    </template>

    <script>
    import DxChart, { DxExport } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxExport
        },
        methods: {
            exportChart() {
                this.$refs.chart.instance.exportTo('Exported Chart', 'PDF');
            },
            printChart() {
                this.$refs.chart.instance.print();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { Export } from 'devextreme-react/chart';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.chartRef = React.createRef();
        }

        render() {
            return (
                <Chart ref={this.chartRef} ... >
                    <Export enabled={true}>
                </Chart>
            );
        }

        get chart() {
            return this.chartRef.current.instance();
        }

        exportChart() {
            this.chart.exportTo('Exported Chart', 'PDF');
        }

        printChart() {
            this.chart.print();
        }
    }

    export default App;

---


You can also export several UI components at once using their SVG markup. Gather the markup from all required UI components by calling the [DevExpress.viz.getMarkup(widgetInstances)](/api-reference/50%20Common/utils/viz/getMarkup(widgetInstances).md '/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances') method, and then pass the markup to the [DevExpress.viz.exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method.

---
##### jQuery

    <!--JavaScript-->
    var chart1 = $("#chartContainer1").dxChart("instance");
    var chart2 = $("#chartContainer2").dxChart("instance");
    var chartMarkup = DevExpress.viz.getMarkup([chart1, chart2]);
    
    DevExpress.viz.exportFromMarkup(chartMarkup, {
        height: 768,
        width: 1024,
        fileName: "Exported Charts",
        format: "PDF"
    });

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    import { getMarkup, exportFromMarkup } from "devextreme/viz/export";
    // ...
    export class AppComponent {
        @ViewChild('chartContainer1', { static: false }) chart1: DxChartComponent;
        @ViewChild('chartContainer2', { static: false }) chart2: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild('chartContainer1') chart1: DxChartComponent;
        // @ViewChild('chartContainer2') chart2: DxChartComponent;
        exportMultipleCharts () {
            const chartMarkup = getMarkup([this.chart1.instance, this.chart2.instance]);
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
            DxChartModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-chart #chartContainer1 ... ></dx-chart>
    <dx-chart #chartContainer2 ... ></dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxChart :ref="chart1RefKey">
                <!-- ... -->
            </DxChart>
            <DxChart :ref="chart2RefKey">
                <!-- ... -->
            </DxChart>
        </div>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';
    import { getMarkup, exportFromMarkup } from 'devextreme/viz/export';

    const chart1RefKey = 'chart1';
    const chart2RefKey = 'chart2';

    export default {
        components: {
            DxChart
        },
        data() {
            return {
                chart1RefKey,
                chart2RefKey
            }
        },
        computed: {
            chart1: function() {
                return this.$refs[chart1RefKey].instance;
            },
            chart2: function() {
                return this.$refs[chart2RefKey].instance;
            },
        },
        methods: {
            exportMultipleCharts() {
                const chartMarkup = getMarkup([this.chart1, this.chart2]);
                exportFromMarkup(chartMarkup, {
                    height: 768,
                    width: 1024,
                    fileName: "Exported Charts",
                    format: "PDF"
                });
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef, useCallback } from 'react';
    import DxChart from 'devextreme-react/chart';
    import { getMarkup, exportFromMarkup } from 'devextreme/viz/export';

    export default function App() {
        const chart1 = useRef(null);
        const chart2 = useRef(null);

        const exportMultipleCharts = useCallback(() => {
            const chartMarkup = getMarkup([chart1.current.instance(), chart2.current.instance()]);
            exportFromMarkup(chartMarkup, {
                height: 768,
                width: 1024,
                fileName: "Exported Charts",
                format: "PDF"
            });
        }, []);

        return (
            <React.Fragment>
                <Chart ref={chart1}>
                    {/* ... */}
                </Chart>
                <Chart ref={chart2}>
                    {/* ... */}
                </Chart>
            </React.Fragment>
        );
    }

---