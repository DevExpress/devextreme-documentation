To bind the **DataGrid** to data provided by an OData service, use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID",
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

Data kept in the **ODataStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). For example, the **DataSource** can filter data.

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            })
        });
    });

Note that the use of the features listed below with the **ODataStore** may cause a significant delay, because they initiate data loading for all pages.

- [summary calculation](/concepts/05%20Widgets/DataGrid/050%20Summaries '/Documentation/Guide/Widgets/DataGrid/Summaries/')
- [grouping](/concepts/05%20Widgets/DataGrid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/') with the [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option set to *false*
- a [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') with the default data source

If you have a large amount of data and need these features, we recommend you use a [Custom Source](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/') instead.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/OdataService/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
