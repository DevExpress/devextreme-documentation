---
id: dxDataGrid.Options.summary.totalItems.column
---
---
##### shortDescription
Specifies the summary item's data column.

---
To specify the data column of a summary item, assign a column [name](/api-reference/_hidden/GridBaseColumn/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption') to this property. DataGrid uses this column's values to calculate the summary item.

The component displays summary items in their corresponding data columns. To display a summary item in another column, configure the [showInColumn](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#showInColumn') property.

[note]

If you do not specify **column**, note the following specifics:

- The component does not display the summary item if you do not specify **showInColumn**.
- DataGrid uses row data objects to calculate summaries, which affects calculated values. For instance, the *"max"* [summary type](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType') returns "[object Object]".

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GridSummaries/"
}

#####See Also#####
- [Total Summary](/concepts/05%20UI%20Components/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/UI_Components/DataGrid/Summaries/Total_Summary/')
- [calculateCustomSummary](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary/calculateCustomSummary.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary')