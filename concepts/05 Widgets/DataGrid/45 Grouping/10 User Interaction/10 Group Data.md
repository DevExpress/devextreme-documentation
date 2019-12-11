A user can group data in the **DataGrid** using a column header's context menu or the group panel.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Grouping Group Panel Context Menu](/images/DataGrid/visual_elements/groupPanel_contextMenu.png)

Assigning **true** to the **grouping**.[contextMenuEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') option adds grouping commands to the context menu. Setting the **groupPanel**.[visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') option to **true** shows the group panel. The latter option also accepts the *"auto"* value that hides the group panel on small screens.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                contextMenuEnabled: true
            },
            groupPanel: {
                visible: true   // or "auto"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping 
            [contextMenuEnabled]="true"> 
        </dxo-grouping>
        <dxo-group-panel 
            [visible]="true"> <!-- or "auto" -->
        </dxo-group-panel>
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

You can prevent a user from dragging columns to the group panel, in which case it becomes an informative component only: a user can see the columns that participate in grouping, but cannot change them. Set the **groupPanel**.[allowColumnDragging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/allowColumnDragging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#allowColumnDragging') option to **false** to activate this behavior. You might want to group data [initially](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/10%20Initial%20and%20Runtime%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Initial_and_Runtime_Grouping') in this case.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            groupPanel: {
                visible: true,
                allowColumnDragging: false
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-group-panel 
            [visible]="true"
            [allowColumnDragging]="false"> 
        </dxo-group-panel>
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

If a specific column should never take part in grouping, set its [allowGrouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') option to **false**. Such a column cannot be dragged to the group panel, and its context menu does not contain grouping commands.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "id",
                allowGrouping: false
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column 
            dataField="id" 
            [allowGrouping]="false">
        </dxi-column>
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

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/",
    name: "Local Grouping"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/",
    name: "Remote Grouping"
}
