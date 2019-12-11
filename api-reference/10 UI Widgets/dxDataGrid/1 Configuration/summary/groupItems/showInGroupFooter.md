---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not a summary item must be displayed in the group footer.

---
By default, summary items are displayed as a part of a [group row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows'). If you need a summary item to be displayed in the group footer, assign *true* to the **showInGroupFooter** option of this item. This summary item will be located in the [column that provides data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column') for it. If you want another column to hold the summary item, specify the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn') option of this item.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>