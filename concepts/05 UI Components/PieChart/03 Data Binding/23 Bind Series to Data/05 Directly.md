To bind a series to data directly, specify which data source field provides arguments and which provides values. For this purpose, use the [argumentField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/argumentField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField') and [valueField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/valueField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#valueField') properties of the [series](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/') configuration object.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    $(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: fruitProduction,
            series: {
                argumentField: 'fruit',
                valueField: 'year2014',
                name: '2014'
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart [dataSource]="fruitProduction">
        <dxi-series
            argumentField="fruit"
            valueField="year2014"
            name="2014">
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
            { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
        ];
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
            :data-source="fruitProduction">
            <DxSeries
                argument-field="fruit"
                value-field="year2014"
                name="2014"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries
    } from 'devextreme-vue/pie-chart';

    const fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    export default {
        components: {
            DxPieChart,
            DxSeries
        },

        data() {
            return {
                fruitProduction
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series
    } from 'devextreme-react/pie-chart';

    const fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    const App = () => {
        return (
            <PieChart ... 
                dataSource={fruitProduction}>
                <Series
                    argumentField="fruit"
                    valueField="year2014"
                    name="2014"
                />
            </PieChart>
        );
    };

    export default App;

---

The PieChart may contain several series that have the same argument field. In this case, you can assign the field's name to the **argumentField** property of the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/') object.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    $(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit'
            },
            series: [
                { valueField: 'year2014', name: '2014' },
                { valueField: 'year2015', name: '2015' },
                { valueField: 'year2016', name: '2016' }
            ]
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit">
        </dxo-common-series-settings>
        <dxi-series valueField="year2014" name="2014"></dxi-series>
        <dxi-series valueField="year2015" name="2015"></dxi-series>
        <dxi-series valueField="year2016" name="2016"></dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
            { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
        ];
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
            :data-source="fruitProduction">
            <DxCommonSeriesSettings argument-field="fruit" />
            <DxSeries
                value-field="year2014"
                name="2014"
            />
            <DxSeries
                value-field="year2015"
                name="2015"
            />
            <DxSeries
                value-field="year2016"
                name="2016"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxCommonSeriesSettings,
        DxSeries
    } from 'devextreme-vue/pie-chart';

    const fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    export default {
        components: {
            DxPieChart,
            DxCommonSeriesSettings,
            DxSeries
        },

        data() {
            return {
                fruitProduction
            };
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

    const fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    const App = () => {
        return (
            <PieChart ...
                dataSource={fruitProduction}>
                <CommonSeriesSettings argumentField="fruit" />
                <Series
                    valueField="year2014"
                    name="2014"
                />
                <Series
                    valueField="year2015"
                    name="2015"
                />
                <Series
                    valueField="year2016"
                    name="2016"
                />
            </PieChart>
        );
    };

    export default App;

--- 

#####See Also#####
- [Update Data in the PieChart](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
