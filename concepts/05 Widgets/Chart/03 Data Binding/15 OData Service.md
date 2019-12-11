To bind the **Chart** to data provided by an OData service, use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
                    key: 'Id'
                },
                paginate: false
            }),
            commonSeriesSettings: {
                argumentField: 'Name',
                type: 'bar'
            },
            series: [
                { valueField: 'RecordHigh', name: 'Highest temperature, &deg;C' },
                { valueField: 'RecordLow', name: 'Lowest temperature, &deg;C' },
                { valueField: 'Average', name: 'Average temperature, &deg;C' }
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        chartDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
                key: 'Id'
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-chart [dataSource]="chartDataSource">
        <dxo-common-series-settings
            argumentField="Name"
            type="bar">
        </dxo-common-series-settings>
        <dxi-series valueField="RecordHigh" name="Highest temperature, &deg;C"></dxi-series>
        <dxi-series valueField="RecordLow" name="Lowest temperature, &deg;C"></dxi-series>
        <dxi-series valueField="Average" name="Average temperature, &deg;C"></dxi-series>
    </dx-chart>

---

As you may notice, in the previous code, the **ODataStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. That is because the **Chart** requires [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
                    key: 'Id'
                },
                paginate: false,
                // Takes the summer months only
                filter: [
                    ['Id', '>=', 6],
                    ['Id', '<=', 8]
                ]
            }),
            // ...
            // See the previous code for the series configuration
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        chartDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems',
                key: 'Id'
            },
            paginate: false,
            // Takes the summer months only
            filter: [
                ['Id', '>=', 6],
                ['Id', '<=', 8]
            ]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-chart [dataSource]="chartDataSource">
        <dxo-common-series-settings
            argumentField="Name"
            type="bar">
        </dxo-common-series-settings>
        <dxi-series valueField="RecordHigh" name="Highest temperature, &deg;C"></dxi-series>
        <dxi-series valueField="RecordLow" name="Lowest temperature, &deg;C"></dxi-series>
        <dxi-series valueField="Average" name="Average temperature, &deg;C"></dxi-series>
    </dx-chart>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/"
}

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/')
- [Update Data in the Chart](/concepts/05%20Widgets/Chart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/')
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/Widgets/Chart/Data_Aggregation/')
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, data binding, provide data, odata, ODataStore, DataSource, process data
