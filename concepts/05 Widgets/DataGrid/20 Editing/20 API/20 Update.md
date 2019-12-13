The [cellValue (rowIndex, visibleColumnIndex, value)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex_value).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex_value') method updates a cell's value. This cell can be located using its row and column indexes. If the cell's data field is known, you can pass it instead of the column index. After a value is updated, save it to the data source by calling the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ ... });

        $("#updateCellButton").dxButton({
            text: "Update Cell",
            onClick: function() {
                $("#dataGridContainer").dxDataGrid("cellValue", 1, "Position", "CTO");
                $("#dataGridContainer").dxDataGrid("saveEditData");
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        updateCell () {
            this.dataGrid.instance.cellValue(1, "Position", "CTO");
            this.dataGrid.instance.saveEditData();
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

    <!--HTML-->
    <dx-data-grid ... ></dx-data-grid>
    <dx-button
        text="Update Cell"
        (onClick)="updateCell()">
    </dx-button>
    
---

The **DataGrid** widget allows you to process an updated cell value in the **columns**.[setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue') function before this value is saved to the data source. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true
            },
            columns: [
                { dataField: "ID", visible: false },
                {
                    dataField: "Full_Name",
                    setCellValue: function (rowData, value) {
                        rowData.ID = value + Math.random() * 100;
                        rowData.Full_Name = value;
                    }
                }
                // ...
            ]
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        setCellValue (rowData, value) {
            rowData.ID = value + Math.random() * 100;
            rowData.Full_Name = value;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid>
        <dxo-editing
            [allowUpdating]="true"
            [allowAdding]="true">
        </dxo-editing>
        <dxi-column dataField="ID" [visible]="false"></dxi-column>
        <dxi-column dataField="Full_Name" [setCellValue]="setCellValue"></dxi-column>
    </dx-data-grid>
    
---

Call the [hasEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/hasEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#hasEditData') to check if there are any unsaved changes. You can save or cancel them using the [saveEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/saveEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#saveEditData') or [cancelEditData()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cancelEditData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cancelEditData') method, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ ... });

        $("#saveChangesButton").dxButton({
            text: "Save changes",
            onClick: function() {
                var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
                if (dataGrid.hasEditData()) {
                    // Implement your logic here
                    dataGrid.saveEditData();
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        saveEditData () {
            if (this.dataGrid.instance.hasEditData()) {
                // Implement your logic here
                this.dataGrid.instance.saveEditData();
            }
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
    
    <!--HTML-->
    <dx-data-grid ... ></dx-data-grid>
    <dx-button
        text="Save changes"
        (onClick)="saveEditData()">
    </dx-button>
    
---

#####See Also#####
#include common-link-callmethods
