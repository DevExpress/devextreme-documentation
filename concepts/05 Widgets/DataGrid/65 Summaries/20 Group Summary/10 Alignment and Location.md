All group items are displayed in parentheses after the group header by default. You can show an item in the column providing data for it by assigning **true** to the [alignByColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/alignByColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#alignByColumn') option. Specify the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn') option to show it in another column. This option can also be applied to items [shown in the group footer](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter').

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: ["OrderNumber", "City", "Price"],
            summary: {
                groupItems: [{
                    column: "City",
                    summaryType: "count",
                    alignByColumn: true
                }, {
                    column: "Price",
                    summaryType: "sum",
                    showInGroupFooter: true
                }, {
                    column: "Price",
                    summaryType: "max",
                    showInGroupFooter: true,
                    showInColumn: "City"
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [columns]="['OrderNumber', 'City', 'Price']" >
        <dxo-summary>
            <dxi-group-item
                column="City"
                summaryType="count"
                [alignByColumn]="true">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum"
                [showInGroupFooter]="true">
            </dxi-group-item>
            <dxi-group-item
                column="Price"
                summaryType="sum"
                [showInGroupFooter]="true"
                showInColumn="City">
            </dxi-group-item>
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}
