---
dep: ..\customTicks.md
default: []
type: array
---
---
##### notUsedInTheme

##### deprecated
Use the **scale** | **customTicks** option instead.

##### shortDescription
Specifies an array of custom major ticks.

---
<p>If you set the start and end scale values, major ticks will automatically be calculated and displayed. If you need to add intermediate (minor) ticks between the major ticks, set the <b>visible</b> property of the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/scale/minorTick">minorTick</a> configuration object to <i>true</i>. If there are no calculated major ticks at particular scale values, you can set them using the <b>customTickValues</b> property. Assign an array of custom major tick values to this property.  To show custom major ticks only, set the <b>showCalculatedTicks</b> property to <i>false</i>.</p>