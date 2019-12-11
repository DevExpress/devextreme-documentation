---
default: undefined
acceptValues: 'string' | 'number' | 'date' | 'boolean' | 'object'
type: string
---
---
##### shortDescription
Specifies the required type of column values.

---
The type of column values is determined based on the type of values specified in the corresponding data source field: numeric values become numeric, strings - strings, etc. In some cases, you may need to convert data source values. For this purpose, specify the required type using the **dataType** option. 
 
The *date* values have a number of pecularities listed below.

- If *date* values are of a *string* type, string should be of the following format: `"yyyy/MM/dd"` or `"yyyy/MM/dd HH:mm:ss"`.
- To show both date and time in the column editor, assign *"shortDateShortTime"* to the [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format') option and *"datetime"* to the [editorOptions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions') | type.
    
        <!--JavaScript-->
        $("#gridContainer").dxDataGrid({
            // ...
            columns: [
                // ...
                {
                    dataField: "HireDate",
                    dataType: "date",
                    format: "shortDateShortTime",
                    editorOptions: { type: "datetime" }
                }
            ]
        });