---
default: 'buttonClick', 'rowClick' (mobile_devices)
acceptValues: 'buttonClick' | 'rowClick'
type: String
---
---
##### shortDescription
Specifies the event on which a group will be expanded/collapsed.

---
By default, to expand/collapse a group, the user clicks its expand/collapse button. On small-screen devices, this approach may impair the user experience. As an alternative, consider expanding/collapsing a group by a click on the group row. For this purpose, assign *"rowClick"* to the **grouping**.**expandMode** option.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridGroupingExpandMode` enum. This enum accepts the following values: `ButtonClick` and `RowClick`.

#####See Also#####
- [Expand and Collapse Groups - User Interaction](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups')