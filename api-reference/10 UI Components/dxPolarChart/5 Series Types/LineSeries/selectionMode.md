---
id: dxPolarChartSeriesTypes.linepolarseries.selectionMode
acceptValues: 'includePoints' | 'excludePoints' | 'none'
type: String
default: 'includePoints'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects the series.

---
When a user selects the series, it may react in one of the following ways depending on the value of the **selectionMode** property.

* **includePoints**   
The series changes its style along with all the points.
* **excludePoints**   
The series changes its style, but the points do not.
* **none**   
The series does not react to selection.

#####See Also#####
- [selectionStyle](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/LineSeries/selectionStyle/')
- **point**.[selectionMode](/api-reference/10%20UI%20Components/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/point/selectionMode.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Series_Types/LineSeries/point/#selectionMode')