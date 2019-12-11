---
default: 'none'
acceptValues: 'none' | 'hide'
type: string
---
---
##### shortDescription
Specifies how the chart must behave when [series point labels](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Series_Point_Labels') overlap.

---
Series point labels display series point values. If your chart contains several series with a large number of points in each, point labels may overlap. In this case, specify how the chart must resolve overlapping using the **resolveLabelOverlapping** option. To hide certain labels, set this option to *'hide'*. Labels to be hidden will be determined automatically.