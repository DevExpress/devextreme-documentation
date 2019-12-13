Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the **DataGrid** to data an OData service supplies. It provides an interface for loading and editing data and allows you to handle data-related events.

---

#####jQuery

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

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        productStore = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID",
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid
        [dataSource]="productStore">
    </dx-data-grid>

---

Data kept in the **ODataStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'), for example, it can filter data.

---

#####jQuery

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

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        productDataSource = new DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            },
            filter: ["Product_Available", "=", true]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid
        [dataSource]="productDataSource">
    </dx-data-grid>

---

[note] Setting the **ODataStore**'s **deserializeDates** option to **false** may cause filtering issues in the **DataGrid**. See this option's [description](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/deserializeDates.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#deserializeDates') for details.

Using the following features with the **ODataStore** may decrease the performance because they initiate data loading for all pages:

- [summary calculation](/concepts/05%20Widgets/DataGrid/65%20Summaries '/Documentation/Guide/Widgets/DataGrid/Summaries/')
- [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') with the [autoExpandAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') option set to **false**
- a [header filter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll') with the default data source

We recommend using a [Custom Source](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/25%20Custom%20Sources '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/') instead if you have a large amount of data and need these features.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ODataService/"
}

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')

[tags]dataGrid, data grid, data binding, provide data, odata, ODataStore, DataSource, process data
