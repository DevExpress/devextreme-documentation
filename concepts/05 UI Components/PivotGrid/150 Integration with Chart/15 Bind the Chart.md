PivotGrid can be bound only to an existing Chart. 

For example, the following code creates a PivotGrid component and a Chart component:

---
##### jQuery

    <!--HTML-->
    <div id="pivot-grid"></div>
    <div id="chart"></div>

    <!--JavaScript-->
    $(function () {
        $("#pivot-grid").dxPivotGrid({ ... });
        $("#chart").dxChart({ ... });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid></dx-pivot-grid>
    <dx-chart></dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid />
        <DxChart />
    </template>
    <script setup lang="ts">
    import DxPivotGrid from 'devextreme-vue/pivot-grid';
    import DxChart from 'devextreme-vue/chart';
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import PivotGrid from 'devextreme-react/pivot-grid';

    const App = () => {
        return (
            <React.Fragment>
                <PivotGrid />
                <Chart />
            </React.Fragment>
        );
    }

    export default App;

---

To bind Chart and PivotGrid without changing the default integration properties, call [bindChart(chart, integrationOptions)](/api-reference/10%20UI%20Components/dxPivotGrid/3%20Methods/bindChart(chart_integrationOptions).md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions'). This method can be called at any point of the application flow. For example, you can bind the chart once it is initialized:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#pivot-grid").dxPivotGrid({ ... });
        $("#chart").dxChart({
            // ...
            onInitialized: function (e) {
                var pivotGridInstance = $("#pivot-grid").dxPivotGrid("instance");
                pivotGridInstance.bindChart('#chart');
            }
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxPivotGridComponent, { static: false }) pivotGrid: DxPivotGridComponent;
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;

        ngAfterViewInit() {
            this.pivotGrid.instance.bindChart(this.chart.instance);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ref="grid" />
        <DxChart ref="chart" />
    </template>
    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    // ...
    const grid = ref<DxPivotGrid>();
    const chart = ref<DxChart>();

    onMounted(() => {
        grid.value?.instance?.bindChart(chart.value?.instance);
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useEffect, useRef } from 'react';
    // ...
    
    const App = () => {
        const chartRef = useRef<ChartRef>(null);
        const pivotGridRef = useRef<PivotGridRef>(null);
        useEffect(() => {
            pivotGridRef.current.instance().bindChart(chartRef.current.instance());
        }, []);

        return (
            <React.Fragment>
                <PivotGrid ref={pivotGridRef} />
                <Chart ref={chartRef} />
            </React.Fragment>
        );
    }

---

If the **bindChart(chart, integrationOptions)** method returns `null`, the binding failed.

#####See Also#####
#include common-link-configurewidget