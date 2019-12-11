---
default: 0.1
type: number
---
---
##### shortDescription
Specifies a coefficient for determining an indent from the background's top boundary to the topmost chart point.

---
When this property is set to a value greater than zero, the chart's value axis is expanded beyond its initial **max** value. This is helpful when you need to display the chart series with an indent from the top background boundary.

Since this property value is a coefficient, you can set a value for the axis extension without knowledge of the actual axis values. The resulting end axis value is calculated using the following formula: **max** + (**max** - **min**)\***topIndent**. Assume that **min** is 50 and **max** is 150. If you set **topIndent** to 0.1, the resulting end axis value will be 160.

You can also set the chart's **bottomIndent** property to specify an indent from the bottom background boundary to the lowest chart point.