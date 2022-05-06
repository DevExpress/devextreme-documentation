---
id: dxDataGrid.Options.export.texts.exportSelectedRows
type: String
default: 'Export selected rows to {0}'
---
---
##### shortDescription
The text of the command that exports selected rows. Applies when the [allowExportSelectedData](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#allowExportSelectedData') property is **true**.

---
The `{0}` placeholder gets its value from the [formats](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#formats) property. For example, if you specify `formats: ['pdf']`, then the shown text is **Export selected rows to PDF**.

![DevExtreme HTML5 DataGrid Export Selected Rows Text](/images/DataGrid/Export_SelectedRows.png)