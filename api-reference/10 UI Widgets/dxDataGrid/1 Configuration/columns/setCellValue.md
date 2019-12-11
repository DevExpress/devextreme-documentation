---
type: function(rowData, value)
---
---
##### shortDescription
Specifies a callback function to be invoked after the cell value is edited by an end-user and before the new value is saved to the data source.

##### param(rowData): object
The data object represented by the current grid row.

##### param(value): any
The inputted value.

---
Use this function to process user input before it will be saved in the data source. This function accepts the **rowData** and **value** parameters. **value** is the user input you should assign to one of the fields of the **rowData**. Initially, **rowData** is an empty object. Fill it with fields whose values should be saved in the data object of the current row.  

    <!--JavaScript-->
    $("#gridContainer").dxDataGrid({
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

[note] To invoke the default behavior, call the **this.defaultSetCellValue(rowData, value)** function.