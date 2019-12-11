---
type: object
---
---
##### shortDescription
Configures the [group panel](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/090%20Group%20Panel.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Panel').

---
Data in **DataGrid** can be grouped by one column or by several. Once a column is used for grouping, it is added to the group panel.

By default, the group panel is hidden. To make it visible, set the **groupPanel** | [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') option to *true*. Alternatively, the visibility of the group panel can depend on the device's screen size. To accomplish this behavior, set the **visible** option to *"auto"*.

In case you need to show the group panel, but make it irresponsive, assign *false* to the **groupPanel** | [allowColumnDragging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/allowColumnDragging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#allowColumnDragging') option. This is useful, for instance, when grid records are grouped initially and when the user needs to know about that grouping, but must not be able to change it.

#####See Also#####
- **grouping** | [contextMenuEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') - enables the user to group data using the context menu.
- **columns[]** | [allowGrouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') - disallows grouping for an individual column.
- [grouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/') - defines the behavior of groups.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridgroupinglocaldatagrouping/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>