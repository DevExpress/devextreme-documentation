To bind series to data using a series template, start with setting common options for all resulting series in the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/') object. Particularly, make sure that you have set the [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/#argumentField') and [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/#valueField'). 

After that, use the **seriesTemplate**.[nameField](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/seriesTemplate/nameField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/seriesTemplate/#nameField') option to specify which data source field provides [names](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/PieChartSeries/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#name') for series.

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

---

If you need to change options of a particular series, return an [object with them](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/') from the **seriesTemplate**.[customizeSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/seriesTemplate/customizeSeries.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/seriesTemplate/#customizeSeries') function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to the function.

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

---

#####See Also#####
- [Update Data in the PieChart](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/')