---
default: 'Export'
type: String
---
---
##### shortDescription
Specifies the hint of the **Export** button when the [allowExportSelectedData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData') option is *true*.

---
When the [allowExportSelectedData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData') option is *true*, a click on <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="vertical-align:middle"/> opens a drop-down menu that allows a user to choose whether to export all data or selected rows only. In this case, the hint of this button is specified by the **exportTo** option.

When the **allowExportSelectedData** option is *false*, a click on <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="vertical-align:middle"/> exports all data instantly. In this case, the hint is specified by the [exportAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/texts/exportAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/texts/#exportAll') option.