---
default: 'onlyPoint'
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: string
---
---
##### shortDescription
Specifies series elements to be highlighted when a user pauses on a series.

---
When a user pauses on a series, it may react in one of the following ways depending on the value of the **hoverMode** option.

* **onlyPoint**   
Only the series point that a user pauses on changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The series point that a user pauses on changes its style. Points with the same argument do it as well.
* **none**   
The series does not react to pointing to it.

#####See Also#####
- [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CandleStickSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/hoverStyle/') - specifies the appearance of series in the hover state.