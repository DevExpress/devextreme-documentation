---
default: undefined
type: string
---
---
##### shortDescription
Specifies the column that provides data for a group summary item.

---
To provide data for a group summary item, assign the [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name'), [data field](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') or [caption](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') of a column to this option. This item will be displayed in each [group row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows') when [grouping](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/') is applied. If you require to place the group summary item in the group footer, set the [showInGroupFooter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInGroupFooter) option to *true* for this item.