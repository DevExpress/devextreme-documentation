---
id: dxPolarChartArgumentAxis.logarithmBase
type: Number
default: 10
---
---
##### shortDescription
Specifies the value to be raised to a power when generating ticks for a [logarithmic axis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type').

---
By default, ticks on a logarithmic axis are generated on a base of 10, i.e., 0.1, 1, 10, 100, 1000 etc. But you can specify a base you require using the **logarithmBase** option. For example, if you set this option to 5, the following ticks will be generated: 0.5, 5, 25, 125, 625, etc.

[note] The value assigned to the **logarithmBase** option should be greater than 1.