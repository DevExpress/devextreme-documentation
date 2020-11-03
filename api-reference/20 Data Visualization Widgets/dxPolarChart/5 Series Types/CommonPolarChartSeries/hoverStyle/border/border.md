---
id: dxPolarChartSeriesTypesCommonPolarChartSeries.hoverStyle.border
type: Object
---
---
##### shortDescription
An object defining the border options for a hovered series.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries

---
To set custom border settings specific to the 'hovered' state for all series at once, use the properties of the **commonSeriesSettings**.**hoverStyle**.**border** configuration object.

To set custom border settings specific to the 'hovered' state for all series of a single type at once, use the properties of the corresponding object within **commonSeriesSettings** (e.g., **area**.**hoverStyle**.**border**). The values that are set within this object override the corresponding common values that are set within the root **commonSeriesSettings**.**hoverStyle**.**border** object.

In case you have to set a hover style option for a border in an individual series, use the **hoverStyle**.**border** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array. The values that are set individually override corresponding common values.