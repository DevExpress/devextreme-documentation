---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.point.selectionMode
acceptValues: 'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies what series points to highlight when a point is selected.

##### propertyOf
dxPolarChartSeriesTypes.linepolarseries,dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.scatterpolarseries

---
The **PolarChart** widget comes with the API that allows you to select a point in code. Use the **selectionMode** property to specify what series points to select when a point is selected:

* **onlyPoint**   
Changes the appearance of the selected point only.
* **allSeriesPoints**   
Changes the appearance of the selected point together with all series points.
* **allArgumentPoints**   
Changes the appearance of the points that correspond to the argument of the selected point (in all series at once). For instance, the bars corresponding to the argument of the selected point are highlighted.
* **none**   
The appearance of the selected point is not changed.

To set custom options for the 'selected' style, which is applied when a point is selected, use the **selectionStyle** configuration object defining it for an individual series (**series**.**point**.**selectionStyle**), for all series of a particular type (**commonSeriesSettings**.**area**/**line**/... | **point**.**selectionStyle**), or all series in the chart (see **commonSeriesSettings**.**point**.**selectionStyle**).

#include common-ref-enum with {
    enum: "`ChartPointInteractionMode`",
    values: "`OnlyPoint`, `AllSeriesPoints`, `AllArgumentPoints`, and `None`"
}