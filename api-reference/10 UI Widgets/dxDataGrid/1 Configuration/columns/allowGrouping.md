---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether the user can group data by values of this column. Applies only when grouping is enabled.

---
When grouping is enabled in the widget, the user can group data by values of any column. To prohibit a particular column from being used for grouping, set the **allowGrouping** option of this column to **false**.

[note]In a column with [calculated values](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue'), this option is set to **false** by default.

#####See Also#####
- [Grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/')