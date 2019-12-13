Assign a non-negative integer to the **columns**.[groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') option to group data initially. In the following example, data is first grouped by the *"Continent"* field, then by the *"Country"* field.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: 'Country', groupIndex: 1 },
                { dataField: 'Continent', groupIndex: 0 },
                // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxi-column 
            dataField="Country"
            [groupIndex]="1">
        </dxi-column>
        <dxi-column 
            dataField="Continent"
            [groupIndex]="0">
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

You can change a column's **groupIndex** at runtime using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method. 

---

#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "City", "groupIndex", 0);


#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        groupByCity() () {
            this.dataGrid.instance.columnOption("City", "groupIndex", 0);
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
- [User Interaction - Group Data](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/10%20Group%20Data.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Group_Data')

