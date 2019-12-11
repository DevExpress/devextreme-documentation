---
dep: ..\label\overlappingBehavior\useAutoArrangement.md
default: true
type: Boolean
---
---
##### deprecated
Use the **overlappingBehavior** | **useAutoArrangement** option instead.

##### shortDescription
Specifies whether or not to expand the current major tick interval if labels overlap each other.

---
If this property is set to <i>true</i>, the major tick interval always changes automatically when labels overlap each other. For instance, when labels are large due to the formatting that is applied, the tick interval will increase. In addition, when you set a custom tick interval that is so small that labels overlap each other, the tick interval will increase. To prohibit the automatic arrangement of major ticks, set the <b>useTicksAutoArrangement</b> property to *false*.