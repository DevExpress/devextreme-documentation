A series is a collection of related data points. The most important characteristic of a series is its type. The PieChart provides **Pie** and **Doughnut** series types; the only difference  between them is the **Doughnut** has a blank center.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/PieChartSeriesTypes/pie.html, /Content/Applications/25_1/DataVisualization/Guides/PieChartSeriesTypes/pie.js"></div>

The **Pie** series type is used by default, but you can change it to **Doughnut** using the [type](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#type') property. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            type: "doughnut" // or "donut"
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        type="doughnut"> <!-- or "donut" -->
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
            type="doughnut"> <!-- or "donut" -->
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

    const App = () => {
        return (
            <PieChart ...
                type="doughnut"> {/* or "donut" */}
            </PieChart>
        );
    };

    export default App;

---

Use the [series](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/') property to configure a series. Pass an object to this property if you have only one series, or an array of objects when you have multiple series. In the latter case, you can also specify settings common for all series in the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/') object, for example: 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            commonSeriesSettings: {
                argumentField: "year"
            },
            series: [{
                valueField: "men"
            }, {
                valueField: "women"
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart>
        <dxo-common-series-settings
            argumentField="year">
        </dxo-common-series-settings>
        <dxi-series valueField="men"></dxi-series>
        <dxi-series valueField="women"></dxi-series>
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
            <DxCommonSeriesSettings
                argument-field="year"
            />
            <DxSeries value-field="men" />
            <DxSeries value-field="women" />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxCommonSeriesSettings,
        DxSeries
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxCommonSeriesSettings,
            DxSeries
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        CommonSeriesSettings,
        Series
    } from 'devextreme-react/pie-chart';

    const App = () => {
        return (
            <PieChart ... >
                <CommonSeriesSettings
                    argumentField="year"
                />
                <Series valueField="men" />
                <Series valueField="women" />
            </PieChart>
        );
    };

    export default App;

---

Settings specified for a series apply to all its points. If you need to customize an individual point, assign a function to the [customizePoint](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/customizePoint.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#customizePoint') property. This function must return an object with properties for the point that you want to customize.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                color: "blue"
            },
            // All series points with the value more than 100 turn red
            // Other series points remain blue
            customizePoint: function (pointInfo) {
                return pointInfo.value > 100 ? { color: "red" } : { }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        [customizePoint]="customizePoint">
        <dxi-series color="blue"></dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // All series points with the value more than 100 turn red
        // Other series points remain blue
        customizePoint (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { }
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
            :customize-point="customizePoint">
            <DxSeries color="blue" />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries
        },

        methods: {
            // All series points with the value more than 100 turn red
            // Other series points remain blue
            customizePoint(pointInfo) {
                return pointInfo.value > 100 ? { color: 'red' } : { };
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series
    } from 'devextreme-react/pie-chart';

    // All series points with the value more than 100 turn red
    // Other series points remain blue
    const customizePoint = (pointInfo) => {
        return pointInfo.value > 100 ? { color: 'red' } : { };
    };

    const App = () => {
        return (
            <PieChart ...
                customizePoint={customizePoint}>
                <Series color="blue" />
            </PieChart>
        );
    };

    export default App;

---

Refer to other topics in this section for details on main series features.

#####See Also#####
- [Series Hover](/concepts/05%20UI%20Components/PieChart/10%20Series/10%20Hover '/Documentation/Guide/UI_Components/PieChart/Series/Hover/')
- [Series Selection](/concepts/05%20UI%20Components/PieChart/10%20Series/20%20Selection '/Documentation/Guide/UI_Components/PieChart/Series/Selection/')
- [Access a Point Using the API](/concepts/05%20UI%20Components/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/PieChart/Series/Access_a_Point_Using_the_API/')
- [Bind Series to Data](/concepts/05%20UI%20Components/PieChart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/PieChart/Data_Binding/Bind_Series_to_Data/')
