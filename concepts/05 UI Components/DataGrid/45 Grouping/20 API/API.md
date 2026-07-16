You can also use DataGrid API to modify the component's grouping configuration.

[note]

Grouping operations do not use **columns[]**.[name](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name') values as unique column identifiers. The following properties are used instead:

- [dataField](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField')
- [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateDisplayValue')
- [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue')
- [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateGroupValue')

To implement grouping with multiple columns bound to the same data field, configure these columns using [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') (as unbound columns).

[/note]