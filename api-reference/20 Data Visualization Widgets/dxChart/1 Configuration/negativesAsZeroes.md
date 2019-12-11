---
default: false
type: Boolean
---
---
##### propertyOf
..\5 Series Types\StackedBarSeries\StackedBarSeries.md,..\5 Series Types\FullStackedBarSeries\FullStackedBarSeries.md,..\5 Series Types\StackedAreaSeries\StackedAreaSeries.md,..\5 Series Types\FullStackedAreaSeries\FullStackedAreaSeries.md,..\5 Series Types\StackedLineSeries\StackedLineSeries.md,..\5 Series Types\FullStackedLineSeries\FullStackedLineSeries.md,..\5 Series Types\StackedSplineSeries\StackedSplineSeries.md,..\5 Series Types\FullStackedSplineSeries\FullStackedSplineSeries.md,..\5 Series Types\StackedSplineAreaSeries\StackedSplineAreaSeries.md,..\5 Series Types\FullStackedSplineAreaSeries\FullStackedSplineAreaSeries.md

##### shortDescription
Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.

---
Oftentimes, series data contains negative values. Visualizing such data using stacked-like series may lead to unexpected results. To prevent situations of this kind, assign **true** to the **negativesAsZeroes** option, and the widget will count all negative values as zeroes.