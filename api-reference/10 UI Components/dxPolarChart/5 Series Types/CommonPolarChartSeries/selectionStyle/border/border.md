---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.selectionStyle.border
type: Object
---
---
##### shortDescription
An object defining the border properties for a selected series.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries

---
To set custom border settings specific to the 'selected' state for all series at once, use the properties of the **commonSeriesSettings**.**selectionStyle**.**border** configuration object.    

To set custom border settings specific to the 'selected' state for all series of a single type at once, use the properties of the corresponding object within **commonSeriesSettings** (e.g. **area**.**selectionStyle**.**border**). The values that are set within this object override the corresponding common values that are set within the root **commonSeriesSettings**.**selectionStyle**.**border** object.

In case you have to set a border selection style property for an individual series, use the **selectionStyle**.**border** object within the series object of the [series](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/') array. The values that are set individually override corresponding common values.