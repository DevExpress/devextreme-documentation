To bind series to data using a series template, start with setting common properties for all resulting series in the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object. Particularly, make sure that you have set the [argumentField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/argumentField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField') and [valueField](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings/valueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#valueField'). 

[note]Certain series types need more than one value field or additional data fields to be specified. These series types are listed in the closing part of the [Bind Series to Data Directly](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data/05%20Directly.md '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/#Directly') topic.

After that, use the **seriesTemplate**.[nameField](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/seriesTemplate/nameField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/seriesTemplate/#nameField') property to specify which data source field provides [names](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#name') for series.

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
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced', // or other data fields
                type: 'bar'
            },
            seriesTemplate: {
                nameField: 'year'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced" <!-- or other data fields -->
            type="bar">
        </dxo-common-series-settings>
        <dxo-series-template nameField="year"></dxo-series-template>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ...
            :data-source="fruitProduction">
            <DxCommonSeriesSettings
                argument-field="fruit"
                value-field="produced" <!-- or other data fields -->
                type="bar"
            />
            <DxSeriesTemplate name-field="year" />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonSeriesSettings,
        DxSeriesTemplate
    } from 'devextreme-vue/chart';

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
            DxChart,
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
    import Chart, {
        CommonSeriesSettings,
        SeriesTemplate
    } from 'devextreme-react/chart';

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
            <Chart ...
                dataSource={fruitProduction}>
                <CommonSeriesSettings
                    argumentField="fruit"
                    valueField="produced" {/* or other data fields */}
                    type="bar"
                />
                <SeriesTemplate nameField="year" />
            </Chart>
        );
    };

    export default App;

---

If you need to change properties of a particular series, return an [object with them](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') from the **seriesTemplate**.[customizeSeries](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/seriesTemplate/customizeSeries.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/seriesTemplate/#customizeSeries') function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to this function.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced',
                type: 'bar'
            },
            seriesTemplate: {
                nameField: 'year',
                customizeSeries: function(seriesName) {
                    // Changes the type of the series "2016" from the common "bar" to "line"
                    return seriesName === 2016 ? { type: 'line' } : { };
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced"
            type="bar">
        </dxo-common-series-settings>
        <dxo-series-template nameField="year" [customizeSeries]="customizeSeries"></dxo-series-template>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples", year: 2014, produced: 84 },
            // ...
        ];
        customizeSeries(seriesName: string) {
            // Changes the type of the series "2016" from the common "bar" to "line"
            return seriesName === 2016 ? { type: "line" } : { };
        }
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
        <DxChart ...
            :data-source="fruitProduction">
            <DxCommonSeriesSettings
                argument-field="fruit"
                value-field="produced"
                type="bar"
            />
            <DxSeriesTemplate
                :customize-series="customizeSeries"
                name-field="year"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonSeriesSettings,
        DxSeriesTemplate
    } from 'devextreme-vue/chart';

    const fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    export default {
        components: {
            DxChart,
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
                // Changes the type of the series "2016" from the common "bar" to "line"
                return seriesName === 2016 ? { type: "line" } : { };
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        CommonSeriesSettings,
        SeriesTemplate
    } from 'devextreme-react/chart';

    const fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    const customizeSeries = (seriesName) => {
        // Changes the type of the series "2016" from the common "bar" to "line"
        return seriesName === 2016 ? { type: "line" } : { };
    };

    const App = () => {
        return (
            <Chart ...
                dataSource={fruitProduction}>
                <CommonSeriesSettings
                    argumentField="fruit"
                    valueField="produced"
                    type="bar"
                />
                <SeriesTemplate
                    nameField="year"
                    customizeSeries={customizeSeries}
                />
            </Chart>
        );
    };

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SeriesTemplates/"
} 

#####See Also#####
- [Update Data in the Chart](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
