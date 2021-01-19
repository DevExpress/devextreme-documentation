---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.visible
type: Boolean
default: true
---
---
##### shortDescription
Specifies the visibility of a series.

---
When this option is set to **false** for a series, the series appears invisible. If you require all the series to appear so, assign the same value to the **visible** option within the **commonSeriesSettings** configuration object.

In addition, you can show/hide series at runtime by using the [show()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/show().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/Methods/#show') or [hide()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/hide().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/Methods/#hide') method of a particular series respectively.

[note] When the series is invisible, the marker of its [legend item](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Legend') is faded.