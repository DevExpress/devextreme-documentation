---
id: dxChart.Options.resolveLabelOverlapping
type: Enums.ChartsLabelOverlap
default: 'none'
---
---
##### shortDescription
Specifies how the chart must behave when [series point labels](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Overview/') overlap.

---
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** property. To hide certain labels, set this property to *'hide'*. Labels to be hidden will be determined automatically. If labels that overlap belong to series points that have the same argument, you can arrange these labels in a stack. For this purpose, set the **resolveLabelOverlapping** property to *'stack'*.

