---
id: dxSparkline.Options.ignoreEmptyPoints
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the sparkline should ignore null data points.

---
Data points that have the _null_ value do not produce actual points. Because of this, the sparkline may be drawn with unnecessary gaps where missing points should have been. To remove these gaps, set the **ignoreEmptyPoints** option to **true**.