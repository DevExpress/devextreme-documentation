---
id: dxDataGrid.Options.columns.name
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the column's unique identifier. If undefined, this value is inherited from the column's [dataField](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') property.

---

Use the **name** value to modify column settings at runtime (for instance, using the [columnOption()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '{basewidgetpath}/Methods/#columnOptionid_optionName_optionValue') method).

[note]

[Grouping](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API') operations do not use **name** values as unique column identifiers. The following properties are used instead:

- [dataField](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns/dataField.md '{basewidgetpath}/Configuration/columns/#dataField')
- [calculateDisplayValue](/api-reference/_hidden/GridBaseColumn/calculateDisplayValue.md '{basewidgetpath}/Configuration/columns/#calculateDisplayValue')
- [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue')
- [calculateGroupValue](/api-reference/_hidden/dxDataGridColumn/calculateGroupValue.md '{basewidgetpath}/Configuration/columns/#calculateGroupValue')

[/note]