---
default: false
type: boolean
---
---
##### shortDescription
Indicates whether to display group summary items in parentheses after the group row header or to align them by the corresponding columns within the group row.

---
When this option is set to *false*, group summary items are displayed in brackets of the group row header. Set this option to *true* to align them by the corresponding columns within the group row.

You can also display group summary items in a group footer by setting the [showInGroupFooter](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/showInGroupFooter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter') option to *true*.

[note] If this option is set to *true* for the first column of the grid, this setting is ignored (the summary item will be displayed in parentheses after the group row header). It happens because in the described case, the group header and the summary value occupy the same cell.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>