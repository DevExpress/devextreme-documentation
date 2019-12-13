Call the [deleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deleteRowrowIndex') method to delete a specific row from the data source. This method invokes a confirmation dialog that allows a user to cancel deletion. The following code hides this dialog, thus a row is instantly deleted from the data source:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                mode: "row", 
                allowDeleting: true,
                texts: {
                    // Hides the confirmation dialog
                    confirmDeleteMessage: null
                }
            }
        }).dxDataGrid("instance");

        $("#deleteRowButton").dxButton({
            text: "Delete Row",
            onClick: function() {
                // Deletes the second row
                dataGrid.deleteRow(1);
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid>
        <dxo-editing
            mode="row"
            [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
        </dxo-editing>
    </dx-data-grid>
    <dx-button
        text="Delete Row"
        (onClick)="deleteRow()">
    </dx-button>

    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        deleteRow () {
            // Deletes the second row
            this.dataGrid.instance.deleteRow(1);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxButtonModule
        ],
        // ...
    })
    
---

Note that in the [batch mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode') a row is only marked as deleted. To save changes, call the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') method. Calling the [undeleteRow(rowIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/undeleteRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#undeleteRowrowIndex') method cancels row deletion.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("undeleteRow", 1);

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        undeleteRow () {
            this.dataGrid.instance.undeleteRow(1);
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
