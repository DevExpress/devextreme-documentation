Set a column's [groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') to **undefined** using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method to ungroup data by this column.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "City", "groupIndex", undefined);


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearGroupingByCity() () {
            this.dataGrid.instance.columnOption("City", "groupIndex", undefined);
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

You can ungroup data by all columns at once using the [clearGrouping()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/clearGrouping().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearGrouping') method.

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("clearGrouping");


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearGrouping() () {
            this.dataGrid.instance.clearGrouping();
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
#include common-link-callmethods
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
- [User Interaction - Clear Grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/30%20Clear%20Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Clear_Grouping')