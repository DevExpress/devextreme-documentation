---
id: dxPieChartSeriesTypes.CommonPieChartSeries.maxLabelCount
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies how many points are acceptable to be in a series to display all labels for these points. Otherwise, the labels will not be displayed.

---
When there is a series with a large number of points, the point labels may overlap each other and make a chart difficult to read. In this instance, it is better to display the point labels depending on their quantity. To specify the maximum amount of the labels to be displayed, set the required number to the **maxLabelCount** field. If the number of the points on a series exceeded the number assigned to the **maxLabelCount** field, the point labels for this series will not be displayed.