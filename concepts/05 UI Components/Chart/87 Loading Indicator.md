When the Chart visualizes local data, loading is instant. But when the Chart is bound to a remote data source, loading may take a considerable amount of time. To keep the viewer's attention, the Chart can display a loading indicator.

![DevExtreme HTML5 JavaScript Charts LoadingIndicator](/images/ChartJS/visual_elements/loading_indicator.png)

To activate the loading indicator, assign **true** to the [loadingIndicator](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/loadingIndicator '/Documentation/ApiReference/UI_Components/dxChart/Configuration/loadingIndicator/').**enabled** property. When activated, the indicator will be displayed or hidden automatically as the chart's data is updated.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            loadingIndicator: {
                enabled: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-loading-indicator [enabled]="true"></dxo-loading-indicator>
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
            <DxLoadingIndicator
                :enabled="true"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxLoadingIndicator
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxLoadingIndicator
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        LoadingIndicator
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <LoadingIndicator
                        enabled={true}
                    />
                </Chart>
            );
        }
    }

    export default App;

---

If you need to show or hide the loading indicator at runtime, call the [showLoadingIndicator()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/showLoadingIndicator().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#showLoadingIndicator') or [hideLoadingIndicator()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/hideLoadingIndicator().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#hideLoadingIndicator') method.

---
##### jQuery

    <!--JavaScript-->var chart = $("#chartContainer").dxChart("instance");
    chart.showLoadingIndicator();
    chart.hideLoadingIndicator();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        showLoadingIndicator () {
            this.chart.instance.showLoadingIndicator();
        };
        hideLoadingIndicator () {
            this.chart.instance.hideLoadingIndicator();
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
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            showLoadingIndicator () {
                this.$refs.chart.instance.showLoadingIndicator();
            },
            hideLoadingIndicator () {
                this.$refs.chart.instance.hideLoadingIndicator();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.chartRef = React.createRef();

            this.showLoadingIndicator = function() {
                this.chartRef.current.instance().showLoadingIndicator();
            }

            this.hideLoadingIndicator = function() {
                this.chartRef.current.instance().hideLoadingIndicator();
            }
        }

        render() {
            return (
                <Chart ref={this.chartRef} ... >
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, load indicator, loading indicator
