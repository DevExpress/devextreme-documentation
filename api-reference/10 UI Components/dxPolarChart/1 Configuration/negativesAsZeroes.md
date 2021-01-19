---
id: dxPolarChart.Options.negativesAsZeroes
type: Boolean
default: false
---
---
##### shortDescription
Forces the UI component to treat negative values as zeroes. Applies to stacked-like series only.

##### propertyOf
dxPolarChartSeriesTypes.stackedbarpolarseries

---
Oftentimes, series data contains negative values. Visualizing such data using stacked-like series may lead to unexpected results. To prevent situations of this kind, assign **true** to the **negativesAsZeroes** property, and the UI component will count all negative values as zeroes.