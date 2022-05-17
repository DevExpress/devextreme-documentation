---
id: dxDataGrid.Options.export.texts.exportAll
type: String
default: 'Export all data to {0}'
---
---
##### shortDescription
The text or hint of the command that exports all data.

---
The `{0}` placeholder gets its value from the [formats](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/formats.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#formats') property. For example, if you specify `formats: ['pdf']`, then the shown text is **Export all data to PDF**.

If you allow users to [export selected rows](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/#allowExportSelectedData') or if the toolbar is in compact mode, **exportAll** specifies the text of the command that exports all data.

![DevExtreme HTML5 Data Grid Export All Text on Small Screen](/images/DataGrid/export_texts/export_all_on_small_screen.png) ![DevExtreme HTML5 Data Grid Export All and Selected Data Text](/images/DataGrid/export_texts/export_all_and_selected_data.png)

In other cases, this property specifies the **Export** button's hint.

![DevExtreme HTML5 Data Grid Export All Text](/images/DataGrid/export_texts/export_all_default.png)