To bind the **Sankey** to data from an OData service, use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'). You should declare it inside the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object because the **Sankey** widget requires disabled [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to prevent data from partitioning.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://www.example.com/dataservices/odata/targetData",
                    key: ["from", "to"]
                },
                paginate: false
            }),
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        sankeyDataSource: DataSource = new DataSource({
            store: {
                type: "odata",
                url: "http://www.example.com/dataservices/odata/targetData",
                key: ["from", "to"]
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sankey
        [dataSource]="sankeyDataSource"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

---

The **DataSource** can also be used for data processing. In the following example, it is used to filter data:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://www.example.com/dataservices/odata/targetData",
                    key: ["from", "to"]
                },
                paginate: false,
                filter: [
                    [ "amount", ">=", 6 ],
                    [ "amount", "<=", 8 ]
                ]
            }),
            sourceField: "from",
            targetField: "to",
            weightField: "amount"
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        sankeyDataSource: DataSource = new DataSource({
            store: {
                type: "odata",
                url: "http://www.example.com/dataservices/odata/targetData",
                key: ["from", "to"]
            },
            paginate: false,
            filter: [
                [ "amount", ">=", 6 ],
                [ "amount", "<=", 8 ]
            ]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sankey
        [dataSource]="sankeyDataSource"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

---

#####See Also#####
- [DataSource Examples - OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
- [Update Data in the Sankey](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/')
