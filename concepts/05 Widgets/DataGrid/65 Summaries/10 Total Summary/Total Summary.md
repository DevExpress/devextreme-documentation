A total summary aggregates all data by columns. You can associate each column with one or more summary items of different types.

![DevExtreme HTML5/JavaScript DataGrid Widget Total Summary](/images/DataGrid/TotalSummary.png)

Configure each summary item in the **summary**.[totalItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/') array. The basic item configuration requires specifying a [column that provides data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column') and the [aggregate function](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType'). Note that each summary item is calculated only for those rows that meet filtering conditions (if a filter is applied).

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "Price"],
            summary: {
                totalItems: [{
                    column: "OrderNumber",
                    summaryType: "count"
                }, {
                    column: "Price",
                    summaryType: "sum"
                }
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [columns]="['OrderNumber', 'Price']" >
        <dxo-summary>
            <dxi-total-item
                column="OrderNumber"
                summaryType="count">
            </dxi-total-item>
            <dxi-total-item
                column="Price"
                summaryType="sum">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridSummaries/"
}

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')

[tags]dataGrid, data grid, total summary, aggregate function, summaryType, alignment, location, showInColumn
