---
id: dxDataGrid.Options.summary.groupItems
type: Array<Object>
default: undefined
---
---
##### shortDescription
Specifies items of the group summary.

---
The group summary provides a synopsis of a group of data. Groups of data are formed in the process of [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/'). The group summary contains several items. Each item displays a value that is a product of applying an aggregate function to a group of data.

To specify the items of the group summary, declare an array of objects, each of which contains at least two fields: [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column') and [summaryType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType'). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "Age",
                    summaryType: "avg"
                }, {
                    column: "LastName",
                    summaryType: "count"
                }]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="Age"
                summaryType="avg">
            </dxi-group-item>
            <dxi-group-item
                column="LastName"
                summaryType="count">
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


A group summary item may be located either in the group row or the group footer. By default, the group row holds all summary items. To locate a summary item in the group footer, set the [showInGroupFooter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter') option of this item to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Group Summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/')