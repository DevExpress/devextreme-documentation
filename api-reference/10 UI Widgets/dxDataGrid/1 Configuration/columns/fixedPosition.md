---
default: undefined
acceptValues: 'left' | 'right'
type: String
---
---
##### shortDescription
Specifies the grid edge to which the column is anchored.

---
If the grid's [columnFixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') | **enabled** option is set to *true* and the column's [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') option is set to *true*, you can specify to which grid column the column must be anchored. For this purpose, use the **fixedPosition** option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `HorizontalEdge` enum. This enum accepts the following values: `Left` and `Right`.