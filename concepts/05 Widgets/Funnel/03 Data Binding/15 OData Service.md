To bind the **Funnel** to data provided by an OData service, use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'Id'
                },
                paginate: false
            }),
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        funnelDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'http://www.example.com/dataservices/odata/targetData',
                key: 'Id'
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

---

As you may notice, in the previous code, the **ODataStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. That is because the **Funnel** requires [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'Id'
                },
                paginate: false,
                filter: [
                    ['Id', '>=', 6],
                    ['Id', '<=', 8]
                ]
            }),
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    import "devextreme/data/odata/store";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        funnelDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'http://www.example.com/dataservices/odata/targetData',
                key: 'Id'
            },
            paginate: false,
            filter: [
                ['Id', '>=', 6],
                ['Id', '<=', 8]
            ]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

---

#####See Also#####
- [DataSource Examples - OData](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData')
- [Update Data in the Funnel](/concepts/05%20Widgets/Funnel/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Funnel/Data_Binding/Update_Data/')
