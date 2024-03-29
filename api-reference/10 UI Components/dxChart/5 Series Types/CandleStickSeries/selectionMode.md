---
id: dxChartSeriesTypes.CandleStickSeries.selectionMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a point.

---
[note]Though not provided out of the box, the selection capability can be implemented using the UI component API. Refer to the [onPointClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') property description for details.

When a user selects a point, its series may react in one of the following ways depending on the value of the **selectionMode** property.

* **onlyPoint**   
Only the selected series point changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The selected series point changes its style. Points with the same argument do it as well.
* **none**   
The series does not react in any way.

#####See Also#####
- [pointSelectionMode](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#pointSelectionMode') - specifies whether only one or several series points can stay selected.
- **series**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CandleStickSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/CandleStickSeries/selectionStyle/') - specifies the appearance of series points in the selected state.
- [pointSelectionChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointSelectionChanged') - an event that fires after the selection state of a series point has been changed.