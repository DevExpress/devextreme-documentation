---
default: 'none'
acceptValues: 'rows' | 'columns' | 'both' | 'none'
type: String
---
---
##### shortDescription
Specifies where to show the total rows or columns. Applies only if [rowHeaderLayout](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/rowHeaderLayout.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#rowHeaderLayout') is *"standard"*.

---
By default, total rows and columns are shown after data (columns at the right side, rows at the bottom). You can place total rows, total columns or both before data using this option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `PivotGridTotalsDisplayMode` enum. This enum accepts the following values: `Rows`, `Columns`, `Both` and `None`.