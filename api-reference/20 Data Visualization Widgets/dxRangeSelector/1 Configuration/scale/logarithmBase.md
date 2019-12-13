---
id: dxRangeSelector.Options.scale.logarithmBase
type: Number
default: 10
---
---
##### shortDescription
Specifies the value to be raised to a power when generating ticks for a [logarithmic scale](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type').

---
By default, ticks on a logarithmic scale are generated on a base of 10, i.e., 0.1, 1, 10, 100, 1000, etc. But you can specify a base you require using the **logarithmBase** option. For example, if you set this option to 5, the following ticks will be generated: 0.5, 5, 25, 125, 625, etc.

[note] The value assigned to the **logarithmBase** option should be greater than 1.