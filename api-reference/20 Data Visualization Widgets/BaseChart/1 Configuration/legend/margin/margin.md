---
default: 10
type: number | object
---
---
##### shortDescription
Specifies the distance between the legend and surrounding widget elements or container borders in pixels.

---
When this option is set to a number, the specified margin applies to all the sides of the legend. Alternatively, the **margin** option can be set to an object. This object specifies margins for each side of the legend separately.

Whether or not the specified margin is applied to a particular side of the legend depends on the legend's location. The location is determined by the **horizontalAlignment** and **verticalAlignment** options. Refer to the **top**, **bottom**, **left** and **right** options' description to discover when the margin applies to the corresponding side of the legend.

![LegendMargin ChartJS](/images/ChartJS/LegendMargin.png)