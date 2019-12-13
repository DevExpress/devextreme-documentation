Customize a summary item's text and value format using the [displayFormat](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/displayFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#displayFormat') and [valueFormat](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat') options. The following code changes the default text and shows an item with the applied currency format. The text includes the parent column's caption because this item is shown in another column.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "SaleAmount",
                    summaryType: "sum",
                    showInColumn: "TotalAmount",
                    valueFormat: "currency",
                    displayFormat: "Column: {1}. Sales: {0}"
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-total-item
                column="SaleAmount"
                summaryType="sum"
                showInColumn="TotalAmount"
                valueFormat="currency"
                displayFormat="Column: {1}. Sales: {0}">
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

Specify the **customizeText** function for a more detailed customization.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "OrderNumber",
                    summaryType: "count",
                    customizeText: function (e) {
                        if (e.value < 4) {
                            return "Less than 4 items"
                        }
                        return "Items: " + e.value;
                    }
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="OrderNumber"
                summaryType="count"
                [customizeText]="customizeText">
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeText (e) {
            if (e.value < 4) {
                return "Less than 4 items"
            }
            return "Items: " + e.value;
        };
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
- [Total Summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/')
- [Group Summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/')

[tags]dataGrid, data grid, change text, change format, displayFormat, valueFormat, customizeText
