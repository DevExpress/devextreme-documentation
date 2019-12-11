---
default: 0
type: Number
---
---
##### shortDescription
Specifies a coefficient for determining an indent from the bottom background boundary to the lowest chart point.

---
When this property is set to a value that is greater than zero, the chart's value axis is expanded from its initial **min** value. This is helpful when you need to display the chart series with an indent from the bottom background boundary.

Since this property value is a coefficient, you can set a value for the axis extension without knowledge of the actual axis values. The resulting start axis value is calculated using the following formula: **min** - (**max** - **min**)\***bottomIndent**. If **min** is 1050, **max** is 2050 and **bottomIndent** is 0.1, the resulting start axis value will be 950.

You can also set the chart's **topIndent** property to specify an indent from the top background boundary to the topmost chart point.