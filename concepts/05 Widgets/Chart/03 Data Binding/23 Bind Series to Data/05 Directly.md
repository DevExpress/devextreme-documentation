To bind a series to data directly, specify which data source field provides arguments and which provides values. For this purpose, use the [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#argumentField') and [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#valueField') options of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') configuration object.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            series: {
                argumentField: 'fruit',
                valueField: 'year2014',
                name: '2014'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart [dataSource]="fruitProduction">
        <dxi-series
            argumentField="fruit"
            valueField="year2014"
            name="2014">
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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
            DxChartModule
        ],
        // ...
    })

---

Commonly, a chart contains several series, and many of them have the same argument field. In this case, you can assign the name of this field to the **argumentField** option of the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    $(function() {
        $("#chartContainer").dxChart({
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

    <!--HTML--><dx-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit">
        </dxo-common-series-settings>
        <dxi-series valueField="year2014" name="2014"></dxi-series>
        <dxi-series valueField="year2015" name="2015"></dxi-series>
        <dxi-series valueField="year2016" name="2016"></dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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
            DxChartModule
        ],
        // ...
    })

---

The following series types need more than one value field or additional data fields.

- **[Bubble Series](/concepts/05%20Widgets/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/')**      
Need one **argumentField**, one **valueField**, and one [sizeField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/sizeField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#sizeField').

- **[Financial Series](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/')**       
Need one **argumentField** and four value fields: [openValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/openValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#openValueField'), [closeValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/closeValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#closeValueField'), [highValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/highValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#highValueField') and [lowValueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/lowValueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#lowValueField').

- **[Range Series](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/')**      
Need one **argumentField** and two value fields: [rangeValue1Field](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/rangeValue1Field.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/#rangeValue1Field') and [rangeValue2Field](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/rangeValue2Field.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/#rangeValue2Field').

<a href="/Demos/WidgetsGallery/Demo/Charts/Bubble/" class="button orange small fix-width-155" target="_blank">Bubble Series Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Charts/Stock/" class="button orange small fix-width-155" target="_blank">Financial Series Demo</a> 
<a href="/Demos/WidgetsGallery/Demo/Charts/RangeBar/" class="button orange small fix-width-155" target="_blank">Range Series Demo</a> 

#####See Also#####
- [Update Data in the Chart](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/')
