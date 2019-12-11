---
default: 'Export all data'
type: String
---
---
##### shortDescription
Specifies the text of the command that exports all data.

---
By default, to execute the "Export All Data" command, a user clicks <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="vertical-align:middle"/>. In this case, the text assigned to the **exportAll** option appears in the hint of this button.

If you set the [allowExportSelectedData](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/allowExportSelectedData.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData') option to *true*, <img src="/Content/images/doc/16_2/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="vertical-align:middle"/> changes its behavior. Clicking on it now opens a drop-down menu containing the "Export All Data" command. In this case, the text applies to the command on this menu.

In an adapted state, the "Export All Data" command appears on the drop-down menu invoked by a click on <img src="/Content/images/doc/16_2/DataGrid/icons/adaptiveEllipsis.png" alt="DevExtreme" style="vertical-align:middle"/>.