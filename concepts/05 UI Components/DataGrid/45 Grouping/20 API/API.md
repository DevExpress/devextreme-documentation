You can also use DataGrid API to modify the component's grouping configuration.

[note]

Grouping operations do not use **columns[]**.[name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name) values as unique column identifiers. The following properties are used instead:

- [dataField]({basewidgetpath}/Configuration/columns/#dataField)
- [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue)
- [calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)
- [calculateGroupValue]({basewidgetpath}/Configuration/columns/#calculateGroupValue)

To implement grouping with multiple columns bound to the same data field, configure these columns using [calculateCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue) (as unbound columns).

[/note]