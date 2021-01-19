---
id: dxDataGrid.Options.summary.groupItems.alignByColumn
type: Boolean
default: false
---
---
##### shortDescription
Indicates whether to display group summary items in parentheses after the group row header or to align them by the corresponding columns within the group row.

---
When this property is set to **false**, group summary items are displayed in brackets of the group row header. Set this property to **true** to align them by the corresponding columns within the group row.

You can also display group summary items in a group footer by setting the [showInGroupFooter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter') property to **true**.

[note] If this property is set to **true** for the first column of the grid, this setting is ignored (the summary item will be displayed in parentheses after the group row header). It happens because in the described case, the group header and the summary value occupy the same cell.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/GroupSummaries/"
}

#####See Also#####
- [Group Summary - Alignment and Location](/concepts/05%20Widgets/DataGrid/65%20Summaries/20%20Group%20Summary/10%20Alignment%20and%20Location.md '/Documentation/Guide/UI_Components/DataGrid/Summaries/Group_Summary/#Alignment_and_Location')