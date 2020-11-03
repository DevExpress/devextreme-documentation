---
id: dxPolarChartSeriesTypesBarpolarseries.hoverMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user points to the series.

---
When a user points to the series, it may react in one of the following ways depending on the value of the **hoverMode** option.

* **onlyPoint**   
Only the series point that a user pauses on changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The series point that a user pauses on changes its style. Points with the same argument do it as well.
* **none**   
The series does not react to pointing to it.

#include common-ref-enum with {
    enum: "`ChartSeriesHoverMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a bar series.

#####See Also#####
- [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/BarSeries/hoverStyle/')