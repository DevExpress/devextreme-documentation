---
id: dxPieChart.Options.minDiameter
type: Number
default: 0.5
---
---
##### shortDescription
Specifies the minimum diameter of the pie.

---
This option specifies the minimum ratio between the pie's diameter and the UI component's width or height (depending on which of them is less). For example, assume that the UI component's size is 300x500 pixels and the **minDiameter** option is 0.7. Then, the diameter of the pie will never be less than: 

*0.7 * min(300,500) = 0.7 * 300 = 210 pixels*

[note]This option is ignored if the [diameter](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/diameter.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#diameter') option is set.

#####See Also#####
- [size](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/size '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/size/')
- [sizeGroup](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/sizeGroup.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#sizeGroup')