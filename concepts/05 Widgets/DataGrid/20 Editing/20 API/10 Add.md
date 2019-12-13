Use the [addRow()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/addRow().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#addRow') method to add an empty row.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("addRow");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        addRow () {
           this.dataGrid.instance.addRow();
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

You can specify initial values for a newly added row in the [onInitNewRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onInitNewRow') event handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hire_Date",
                dataType: "date"
            },
                // ...
            ],
            onInitNewRow: function(e) {
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onInitNewRow)="onInitNewRow($event)">
        <dxi-column dataField="Hire_Date" dataType="date"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onInitNewRow (e) {
            e.data.Hire_Date = new Date();
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