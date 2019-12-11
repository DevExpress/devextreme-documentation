---
default: false
type: boolean
---
---
##### shortDescription
Specifies whether the series should ignore null data points.

---
Data points that have the _null_ argument or value do not produce actual series points. Because of this, series of continuous types (line, spline, area, etc.) may be drawn with unnecessary gaps where missing points should have been. To remove these gaps, set the **ignoreEmptyPoints** option to *true*.