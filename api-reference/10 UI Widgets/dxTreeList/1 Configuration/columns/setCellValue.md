Using this function, you can process user input before it will be saved in the data source. This function accepts the **rowData** and **value** parameters. **value** is the user input that you should assign to one of the fields of the **rowData**. Initially, **rowData** is an empty object. Fill it with fields whose values should be saved in the data object of the current row.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
        <dxi-column dataField="field1"></dxi-column>
        <dxi-column dataField="field2" [setCellValue]="setCellValue"></dxi-column>
    </dx-tree-list>
    
    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
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
            DxTreeListModule
        ],
        // ...
    })
    
---
    

[note] To invoke the default behavior, call the **this.defaultSetCellValue(rowData, value)** function.