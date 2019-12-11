---
dep: ..\customTicks.md
default: []
type: Array
---
---
##### notUsedInTheme

##### shortDescription
Specifies an array of custom major ticks.

---
If you set the start and end scale values, major ticks will automatically be calculated and displayed. If you need to add intermediate (minor) ticks between the major ticks, set the **visible** property of the [minorTick](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/scale/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/minorTick') configuration object to **true**. If there are no calculated major ticks at particular scale values, you can set them using the **customTickValues** property. Assign an array of custom major tick values to this property.  To show custom major ticks only, set the **showCalculatedTicks** property to **false**.