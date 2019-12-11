To bind a series to data directly, specify which data source field provides arguments and which provides values. For this purpose, use the [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#argumentField') and [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#valueField') options of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/') configuration object.

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

---

The **PieChart** may contain several series that have the same argument field. In this case, you can assign the field's name to the **argumentField** option of the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/') object.

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

--- 

#####See Also#####
- [Update Data in the PieChart](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/')
