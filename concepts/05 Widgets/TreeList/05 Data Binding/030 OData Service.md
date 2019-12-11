Use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') to bind the **TreeList** to data an OData service supplies. It provides an interface for loading and editing data and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://examples.com/odata/Products",
                key: "Product_ID",
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        productStore = new ODataStore({
            url: "https://examples.com/odata/Products",
            key: "Product_ID",
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="productStore">
    </dx-tree-list>

---

Data kept in the **ODataStore** can be processed in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'), for example, it can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://examples.com/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        productDataSource = new DataSource({
            store: {
                type: "odata",
                url: "https://examples.com/odata/Products",
                key: "Product_ID"
            },
            filter: ["Product_Available", "=", true]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="productDataSource">
    </dx-tree-list>

---

[note] Setting the **ODataStore**'s **deserializeDates** option to **false** may cause filtering issues in the **TreeList**. See this option's [description](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration/deserializeDates.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#deserializeDates') for details.

#####See Also#####
- [Data Layer - Data Source Examples | OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)

[tags]treeList, data binding, provide data, odata, ODataStore, DataSource, process data
