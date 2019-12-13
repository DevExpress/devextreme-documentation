As a rule, a [lookup column](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Lookup_Columns/') contains IDs from a [main data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') field but displays human-readable values from [its own data source](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/#dataSource'). When the **DataGrid** first launches, it loads data from both data sources which causes performance to decrease.

You can send the human-readable values from the server as a part of the main data source alongside the IDs (like in <a href="https://github.com/DevExpress/devextreme-examples/blob/19_2/datagrid-webapi/datagrid-webapi/Controllers/OrdersController.cs#L23-L43" target="_blank">this example</a>) to optimize the lookup column. In this case, use the column's [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateDisplayValue') option to specify which field provides the human-readable values. With this optimization, the lookup data source is not loaded until a user starts editing the lookup column. 

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            //...
            columns: [{
                caption: "Customer",
                // "CustomerName" provides human-readable values
                calculateDisplayValue: "CustomerName",
                dataField: "CustomerID",
                lookup: {
                    valueExpr: "CustomerID",
                    displayExpr: "ContactName",
                    dataSource: {
                        store: {
                            // ...
                            key: "CustomerID"
                        }
                    }
                }
            },
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column
            caption="Customer"
            dataField="CustomerID"
            calculateDisplayValue="CustomerName">   <!-- "CustomerName" provides human-readable values -->
            <dxo-lookup
                [dataSource]="dataSource"
                displayExpr="ContactName"
                valueExpr="CustomerID">
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    import "devextreme/data/array_store";
    // or
    // import "devextreme/data/odata/store";
    // import "devextreme/data/custom_store";
    export class AppComponent {
        dataSource: any;
        constructor() {
            this.dataSource = {
                store: {
                    // ...
                    key: "CustomerID"
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#####See Also#####
- <a href="https://github.com/DevExpress/devextreme-examples/tree/19_2/datagrid-webapi" target="_blank">DataGrid and Web API Example</a>
- [Bind a Lookup Column to a Custom Data Source](/concepts/05%20Widgets/DataGrid/99%20How%20To/Bind%20a%20Lookup%20Column%20to%20a%20Custom%20Data%20Source.md '/Documentation/Guide/Widgets/DataGrid/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/')
