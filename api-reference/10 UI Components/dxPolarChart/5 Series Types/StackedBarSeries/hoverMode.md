---
id: dxPolarChartSeriesTypes.stackedbarpolarseries.hoverMode
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user points to the series.

---
When a user points to the series, it may react in one of the following ways depending on the value of the **hoverMode** property.

* **onlyPoint**   
Only the series point that a user pauses on changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The series point that a user pauses on changes its style. Points with the same argument do it as well.
* **none**   
The series does not react to pointing to it.

#####See Also#####
- [hoverStyle](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/StackedBarSeries/hoverStyle/')