---
dep: ..\tickInterval.md
default: undefined
type: Number
---
---
##### deprecated
Use the **scale** | **tickInterval** option instead.

##### shortDescription
Specifies an interval between major ticks.

---
<p>Major ticks are ticks that are accompanied by labels, which display the corresponding scale values. Use this property to divide the scale by major ticks of a specified interval. If this property is not set, major ticks are automatically arranged so that labels do not overlap each other.<br/>

<b>NOTE</b>: The specified tick interval can be changed internally if its value leads to labels overlapping. If you need to prohibit automatic tick arrangement in this situation, set the <b>useTicksAutoArrangement</b> property to <i>false</i>.</p>