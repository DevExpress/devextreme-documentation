To bind series to data using a series template, start with setting common properties for all resulting series in the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/') object. Particularly, make sure that you have set the [argumentField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/argumentField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/#argumentField') and [valueField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/valueField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/#valueField'). 

After that, use the **seriesTemplate**.[nameField](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/seriesTemplate/nameField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/seriesTemplate/#nameField') property to specify which data source field provides [names](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/PieChartSeries/name.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#name') for series.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        { fruit: "Apples", year: 2015, produced: 82 },
        { fruit: "Apples", year: 2016, produced: 90 },
        { fruit: "Oranges", year: 2014, produced: 72 },
        { fruit: "Oranges", year: 2015, produced: 70 },
        { fruit: "Oranges", year: 2016, produced: 76 }
    ];

    $(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced'
            },
            seriesTemplate: {
                nameField: 'year'
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced">
        </dxo-common-series-settings>
        <dxo-series-template
            nameField="year">
        </dxo-series-template>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples", year: 2014, produced: 84 },
            { fruit: "Apples", year: 2015, produced: 82 },
            { fruit: "Apples", year: 2016, produced: 90 },
            { fruit: "Oranges", year: 2014, produced: 72 },
            { fruit: "Oranges", year: 2015, produced: 70 },
            { fruit: "Oranges", year: 2016, produced: 76 }
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
            <DxCommonSeriesSettings
                argument-field="fruit"
                value-field="produced"
            />
            <DxSeriesTemplate name-field="year" />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxCommonSeriesSettings,
        DxSeriesTemplate
    } from 'devextreme-vue/pie-chart';

    const fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        { fruit: "Apples", year: 2015, produced: 82 },
        { fruit: "Apples", year: 2016, produced: 90 },
        { fruit: "Oranges", year: 2014, produced: 72 },
        { fruit: "Oranges", year: 2015, produced: 70 },
        { fruit: "Oranges", year: 2016, produced: 76 }
    ];

    export default {
        components: {
            DxPieChart,
            DxCommonSeriesSettings,
            DxSeriesTemplate
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
        SeriesTemplate
    } from 'devextreme-react/pie-chart';

    const fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        { fruit: "Apples", year: 2015, produced: 82 },
        { fruit: "Apples", year: 2016, produced: 90 },
        { fruit: "Oranges", year: 2014, produced: 72 },
        { fruit: "Oranges", year: 2015, produced: 70 },
        { fruit: "Oranges", year: 2016, produced: 76 }
    ];

    const App = () => {
        return (
            <PieChart ...
                dataSource={fruitProduction}>
                <CommonSeriesSettings
                    argumentField="fruit"
                    valueField="produced"
                />
                <SeriesTemplate nameField="year" />
            </PieChart>
        );
    };

    export default App;

---

If you need to change properties of a particular series, return an [object with them](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/') from the **seriesTemplate**.[customizeSeries](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/seriesTemplate/customizeSeries.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/seriesTemplate/#customizeSeries') function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to the function.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    $(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced'
            },
            seriesTemplate: {
                nameField: 'year',
                customizeSeries: function(seriesName) {
                    // Colors the series "2016" in blue
                    return seriesName == 2016 ? { color: 'blue' } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced">
        </dxo-common-series-settings>
        <dxo-series-template
            nameField="year"
            [customizeSeries]="customizeSeries">
        </dxo-series-template>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples", year: 2014, produced: 84 },
            // ...
        ];
        customizeSeries(seriesName: string) {
            // Colors the series "2016" in blue
            return seriesName == 2016 ? { color: 'blue' } : { }
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
            :data-source="fruitProduction">
            <DxCommonSeriesSettings
                argument-field="fruit"
                value-field="produced"
            />
            <DxSeriesTemplate
                :customize-series="customizeSeries"
                name-field="year"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxCommonSeriesSettings,
        DxSeriesTemplate
    } from 'devextreme-vue/pie-chart';

    const fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    export default {
        components: {
            DxPieChart,
            DxCommonSeriesSettings,
            DxSeriesTemplate
        },

        data() {
            return {
                fruitProduction
            };
        },

        methods: {
            customizeSeries(seriesName) {
                // Colors the series "2016" in blue
                return seriesName == 2016 ? { color: 'blue' } : { }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        CommonSeriesSettings,
        SeriesTemplate
    } from 'devextreme-react/pie-chart';

    const fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    const customizeSeries = (seriesName) => {
        // Colors the series "2016" in blue
        return seriesName == 2016 ? { color: 'blue' } : { }
    };

    const App = () => {
        return (
            <PieChart ...
                dataSource={fruitProduction}>
                <CommonSeriesSettings
                    argumentField="fruit"
                    valueField="produced"
                />
                <SeriesTemplate
                    nameField="year"
                    customizeSeries={customizeSeries}
                />
            </PieChart>
        );
    };

    export default App;

---

#####See Also#####
- [Update Data in the PieChart](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')