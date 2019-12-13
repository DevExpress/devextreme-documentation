---
id: dxDataGrid.Options.summary.groupItems.showInGroupFooter
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether or not a summary item must be displayed in the group footer.

---
By default, summary items are displayed as a part of a group row. If you need a summary item to be displayed in the group footer, assign **true** to the **showInGroupFooter** option of this item. This summary item will be located in the [column that provides data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column') for it. If you want another column to hold the summary item, specify the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn') option of this item.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Group Summary - Alignment and Location](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary/10%20Alignment%20and%20Location.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/#Alignment_and_Location')