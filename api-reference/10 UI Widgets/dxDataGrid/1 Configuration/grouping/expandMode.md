---
default: 'buttonClick'
acceptValues: 'buttonClick' | 'rowClick'
type: String
---
---
##### shortDescription
Specifies the event on which a group will be expanded/collapsed.

---
By default, to expand/collapse a group, the user clicks its expand/collapse button. On small-screen devices, this approach may impair the user experience. As an alternative, consider expanding/collapsing a group by a click on the group row. For this purpose, assign *"rowClick"* to the **grouping** | **expandMode** option.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridGroupingExpandMode` enum. This enum accepts the following values: `ButtonClick` and `RowClick`.