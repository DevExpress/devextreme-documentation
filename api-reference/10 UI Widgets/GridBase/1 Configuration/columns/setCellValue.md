---
type: function(rowData, value)
---
---
##### shortDescription
Specifies a function to be invoked after the user has edited a cell value, but before it will be saved in the data source.

##### param(rowData): Object
The data object where new data should be set.

##### param(value): any
The input value.

---
Using this function, you can process user input before it will be saved in the data source. This function accepts the **rowData** and **value** parameters. **value** is the user input that you should assign to one of the fields of the **rowData**. Initially, **rowData** is an empty object. Fill it with fields whose values should be saved in the data object of the current row.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                "field1",
                {
                    dataField: "field2",
                    setCellValue: function(rowData, value) {
                        rowData.field2 = value;
                        rowData.field1 = null;
                    }
                },
                // ...
            ]
        });
    });
    
##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="field1"></dxi-column>
        <dxi-column dataField="field2" [setCellValue]="setCellValue"></dxi-column>
    </dx-data-grid>
    
    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        setCellValue (rowData, value) {
            rowData.field2 = value;
            rowData.field1 = null;
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

[note] To invoke the default behavior, call the **this.defaultSetCellValue(rowData, value)** function.