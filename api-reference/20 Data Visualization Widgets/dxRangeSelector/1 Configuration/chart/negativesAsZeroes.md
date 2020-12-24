---
id: dxRangeSelector.Options.chart.negativesAsZeroes
type: Boolean
default: false
---
---
##### shortDescription
Forces the UI component to treat negative values as zeroes. Applies to stacked-like series only.

---
Oftentimes, series data contains negative values. Visualizing such data using stacked-like series may lead to unexpected results. To prevent situations of this kind, assign **true** to the **negativesAsZeroes** option, and the UI component will count all negative values as zeroes.