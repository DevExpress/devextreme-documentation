---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether a sparkline ignores null data points or not.

---
By default, if a data source has data points with a _null_ argument or value, a sparkline may draw series with unnecessary gaps between points. To prevent this behavior from occurring, set the **ignoreEmptyPoints** option to *true*.