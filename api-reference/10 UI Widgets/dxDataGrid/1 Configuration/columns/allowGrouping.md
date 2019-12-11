---
default: true
type: boolean
---
---
##### shortDescription
Specifies whether the user can group data by values of this column. Applies only when grouping is enabled.

---
When grouping is enabled in the widget (refer to the **See Also** section), the user can group data by values of any column. To prohibit a particular column from being used for grouping, set the **allowGrouping** option of this column to *false*.

[note]In a column with [calculated values](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue'), this option is set to *false* by default.

#####See Also#####
- **grouping** | [contextMenuEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') - enables the user to group data using the context menu.
- **groupPanel** | [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') - enables the user to group data using the [group panel](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/090%20Group%20Panel.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Panel').
- **groupPanel** | [allowColumnDragging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/allowColumnDragging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#allowColumnDragging') - allows the user to move column headers to/from the group panel using drag-and-drop.
- **columns[]** | [groupIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') - specifies initial grouping.