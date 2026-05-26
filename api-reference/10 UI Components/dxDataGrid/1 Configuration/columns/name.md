---
id: dxDataGrid.Options.columns.name
type: String | undefined
default: undefined
---
---
##### shortDescription
Specifies the column's unique identifier. If not defined, this value is inherited from the column's [dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') property.

---

Use the **name** value to modify column settings at runtime (for instance, using the [columnOption()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '{basewidgetpath}/Methods/#columnOptionid_optionName_optionValue') method).

[note]

[Grouping](/Documentation/Guide/UI_Components/DataGrid/Grouping/#API) operations do not use **name** values as unique column identifiers. The following properties are used instead:

- [dataField]({basewidgetpath}/Configuration/columns/#dataField)
- [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue)
- [calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)
- [calculateGroupValue]({basewidgetpath}/Configuration/columns/#calculateGroupValue)

[/note]