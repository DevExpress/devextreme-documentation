---
id: dxDataGrid.Options.export.allowExportSelectedData
---
---
##### shortDescription
Allows users to export selected rows only.

---
When this property is set to **true**, a click on <img src="/images/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="vertical-align:middle"/> invokes a menu that contains the "Export selected rows" command.

![DevExtreme DataGrid Exporting Selected Rows](/images/DataGrid/Export_SelectedRows.png)

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/",
    name: "Export to Excel"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PDFOverview/",
    name: "Export to PDF"
}

[note]

- This property cannot be enabled when [custom server-side summaries](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/07%20Custom%20Aggregate%20Function/20%20Server-Side%20Data%20Aggregation.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation') are used.

- You must specify either the component's [keyExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr) or the [store's](/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores) **key** property to ensure that export works properly.

[/note]

#####See Also#####
- **export**.**texts**.[exportSelectedRows](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export/texts/exportSelectedRows.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/texts/#exportSelectedRows') - customizes the text of the "Export selected rows" command.
- **selection**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#mode') - enables selection in the UI component.
