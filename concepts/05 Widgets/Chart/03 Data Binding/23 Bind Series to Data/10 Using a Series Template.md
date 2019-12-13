To bind series to data using a series template, start with setting common options for all resulting series in the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object. Particularly, make sure that you have set the [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#argumentField') and [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#valueField'). 

[note]Certain series types need more than one value field or additional data fields to be specified. These series types are listed in the closing part of the [Bind Series to Data Directly](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data/05%20Directly.md '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/#Directly') topic.

After that, use the **seriesTemplate**.[nameField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/seriesTemplate/nameField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/#nameField') option to specify which data source field provides [names](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name') for series.

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
            valueField="produced"
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

---

If you need to change options of a particular series, return an [object with them](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') from the **seriesTemplate**.[customizeSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/seriesTemplate/customizeSeries.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/#customizeSeries') function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to this function.

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
                    return seriesName == 2016 ? { type: 'line' } : { }
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
            return seriesName == 2016 ? { type: "line" } : { }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SeriesTemplates/"
} 

#####See Also#####
- [Update Data in the Chart](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/')