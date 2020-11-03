---
id: dxPolarChartSeriesTypesStackedbarpolarseries.selectionMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects the series.

---
When a user selects the series, it may react in one of the following ways depending on the value of the **selectionMode** option.

* **onlyPoint**   
Only the selected series point changes its style.
* **allSeriesPoints**   
All points in the selected series change their style.
* **allArgumentPoints**   
The selected series point changes its style. Points with the same argument do it as well.
* **none**   
The series does not react to selection.

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a stacked bar series.

#####See Also#####
- [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/StackedBarSeries/selectionStyle/')