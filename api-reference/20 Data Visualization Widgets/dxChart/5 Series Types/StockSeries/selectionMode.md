---
id: dxChartSeriesTypesStockSeries.selectionMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a point.

---
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') option description for details.

When a user selects a point, its series may react in one of the following ways depending on the value of the **selectionMode** option.

* **onlyPoint**   
Only the selected series point changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The selected series point changes its style. Points with the same argument do it as well.
* **none**   
The series does not react in any way.

#include common-ref-enum with {
    enum: "`ChartSeriesSelectionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
} Note that although this enum accepts more values, only the listed ones can be applied to a stock series.

#####See Also#####
- [pointSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode') - specifies whether only one or several series points can stay selected.
- **series**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/selectionStyle/') - specifies the appearance of series points in the selected state.
- [pointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged') - an event that fires after the selection state of a series point has been changed.