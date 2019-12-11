The columns's [dataType](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') defines a cell's editor that can be configured using the [editorOptions](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') object. However, this object cannot be used to change the editor's type or **onValueChanged** event handler. Instead, use the [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing') function as shown in the following code. The function's parameter provides the **editorName** and **editorOptions** fields for changing the used editor and its configuration.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Note",
                editorOptions: {
                    minHeight: 200
                }
            }, // ...
            ],
            onEditorPreparing: function(e) {
                if (e.dataField == "Name") {
                    // Changes the editor's type
                    e.editorName = "dxTextArea";
                    e.editorOptions.onValueChanged = function (args) {
                        // Implement your logic here

                        // Updates the cell value
                        e.setValue(args.value);
                    }
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)">
        <dxi-column
            dataField="Note"
            [editorOptions]="{ minHeight: 200 }">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxTextAreaModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onEditorPreparing (e) {
            if (e.dataField == "Name") {
                // Changes the editor's type
                e.editorName = "dxTextArea";
                e.editorOptions.onValueChanged = function (args) {
                    // Implement your logic here

                    // Updates the cell value
                    e.setValue(args.value);
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxTextAreaModule
        ],
        // ...
    })
    
---

Implement the **columns[]**.[editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') function for more extensive customization, in which you should specify your custom component's appearance and behavior in full. The following code uses this function to substitute an HTML check box for a default editor:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hidden",
                editCellTemplate: function(cellElement, cellInfo) {
                    $('<input type="checkbox">')
                        .prop("checked", cellInfo.value)
                        .prop("disabled", cellInfo.setValue ? null : "disabled")
                        .on("change", function(args) {
                            cellInfo.setValue(args.target.checked);
                        })
                        .appendTo(cellElement);
                }
            },
            // ...
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Hidden" editCellTemplate="editCellTemplate"></dxi-column>
        <div *dxTemplate="let cellInfo of 'editCellTemplate'">
            <input type="checkbox"
                [checked]="cellInfo.value"
                (change)="setCheckBoxValue($event, cellInfo)"
                [attr.disabled]="cellInfo.setValue ? null : 'disabled'" />
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        setCheckBoxValue (args, cellInfo) {
            cellInfo.setValue(args.target.checked);
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

Editors are displayed in cells in the normal state too if you set the **columns**.[showEditorAlways](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/showEditorAlways.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showEditorAlways') option to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hidden",
                dataType: "boolean",
                showEditorAlways: true
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Hidden"
            dataType="boolean"
            [showEditorAlways]="true">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
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

#####See Also#####
- [Columns - Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/')
