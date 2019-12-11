---
default: false
type: boolean
---
---
##### shortDescription
Indicates if [column fixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') is enabled.

---
When this option is set to *true*, the columns for which the [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') option is set to *true* will be anchored to the grid's edge. The edge is specified by the the column's [fixedPosition](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition') option. In addition, the column context menu will be extended with column fixing- related commands allowing end users to fix columns at runtime.

[note]This option is automatically set to *true* when at least one column has the [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') option set to *true*.

For details, refer to the [Fixing Grid Columns](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns/060%20Fixing%20Grid%20Columns.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Fixing_Grid_Columns') topic.