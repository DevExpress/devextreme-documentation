A user expands or collapses a group row by clicking its expand/collapse button. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Grouping Expanded and Collapsed Rows](/images/DataGrid/GroupsExpandedCollapsed.png)

Set the **grouping**.[expandMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/expandMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#expandMode') option to *"rowClick"* to allow a user to expand or collapse a group row by clicking it as it could be difficult to press this button on small-screen devices.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                // ...
                expandMode: "rowClick"  // or "buttonClick"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping ...
            expandMode="rowClick">  <!-- or "buttonClick" -->
        </dxo-grouping>
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

You can prevent a user from expanding and collapsing groups by assigning **false** to the **grouping**.[allowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/allowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing') option. After that, you can expand and collapse groups only [programmatically](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups').

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                // ...
                allowCollapsing: false
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping ...
            [autoExpandAll]="true"
            [allowCollapsing]="false">
        </dxo-grouping>
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
