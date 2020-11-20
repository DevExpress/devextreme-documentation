---
id: dxPolarChartSeriesTypesCommonPolarChartSeries.valueErrorBar.displayMode
acceptValues: 'auto' | 'high' | 'low' | 'none'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies whether error bars must be displayed in full or partially.

---
Usually, when displaying error bars, you need both the lower and higher parts of them to indicate the error. This case corresponds to the **displayMode** option equaling *'auto'*. If you need to display the lower or higher parts separately, set this option to *'low'* or *'high'* respectively. To hide error bars, assign *'none'* to this option.

#include common-ref-enum with {
    enum: "`ValueErrorBarDisplayMode`",
    values: "`Auto`, `Low`, `High`, and `None`"
}