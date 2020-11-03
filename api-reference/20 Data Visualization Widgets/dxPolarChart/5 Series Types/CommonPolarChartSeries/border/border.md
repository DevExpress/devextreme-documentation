---
id: dxPolarChartSeriesTypesCommonPolarChartSeries.border
type: Object
---
---
##### shortDescription
An object defining the series border configuration options.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries

---
Series of some types can be displayed with borders (bars, area, etc.). To set custom border settings for all such series at once, use the **border** object within the **commonSeriesSettings** configuration object.

If you have several series of one type, you can set border options specific to this type using the corresponding object (**area**, **line**, or another) within the **commonSeriesSettings** configuration object. In addition, any non-specific series type property of the **commonSeriesSettings**.**border** object can be added to the series-type-specific border definition within the **commonSeriesSettings**.**area**/**line**/... | **border** configuration object. The values that are set within series-type-specific configuration objects override the corresponding common values.

In case you have to set an individual value for a common or series-type-specific border option, use the **border** object within the series object of the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array. The values that are set individually override corresponding common values.