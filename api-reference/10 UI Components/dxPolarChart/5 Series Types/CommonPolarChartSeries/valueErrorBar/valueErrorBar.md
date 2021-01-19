---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar
type: Object
---
---
##### shortDescription
Configures error bars.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.linepolarseries,dxPolarChartSeriesTypes.scatterpolarseries

---
Error bars are used on charts to indicate an error or an uncertainty in a reported measurement. They give a general idea of how precise a measurement is.

In **PolarChart**, an error bar is a vertical bar with two marks at its edges. An error bar accompanies a series point. Error bars can be generated either from concrete or calculated values. To generate one error bar, two values, high and low, are needed. If the [data source](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#dataSource') of your chart provides concrete high and low values, assign the required data source fields to the **highValueField** and **lowValueField** options.

Alternatively, you can calculate the high and low error bar values automatically. For this purpose, choose one of [error bar types](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/valueErrorBar/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#type') and specify the [value](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/valueErrorBar/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/valueErrorBar/#value') to be used in calculation.

[note]Error bars are available for axes of a numeric [type](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#type') only.