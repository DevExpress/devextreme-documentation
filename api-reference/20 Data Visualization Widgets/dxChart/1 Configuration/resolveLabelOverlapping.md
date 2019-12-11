---
default: 'none'
acceptValues: 'hide' | 'none' | 'stack'
type: String
---
---
##### shortDescription
Specifies how the chart must behave when [series point labels](/concepts/05%20Widgets/Chart/15%20Point%20Labels/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Point_Labels/Overview/') overlap.

---
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically. If labels that overlap belong to series points that have the same argument, you can arrange these labels in a stack. For this purpose, set the **resolveLabelOverlapping** option to *'stack'*.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ChartResolveLabelOverlapping` enum. This enum accepts the following values: `None`, `Hide` and `Stack`.