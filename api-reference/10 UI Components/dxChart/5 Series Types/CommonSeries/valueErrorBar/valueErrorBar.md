---
id: dxChartSeriesTypes.CommonSeries.valueErrorBar
type: Object
---
---
##### shortDescription
Configures error bars.

##### propertyOf
dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.ScatterSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.StepLineSeries

---
Error bars are used on charts to indicate an error or an uncertainty in a reported measurement. They give a general idea of how precise the measurement is.

![DevExtreme HTML5 Charts ErrorBars](/images/ChartJS/visual_elements/error_bars.png)

Error bars can be generated either from concrete or calculated values. To generate one error bar, two values, high and low, are needed. If the chart [data source](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource') supplies concrete high and low values, assign the required data source fields to the [highValueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/highValueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/valueErrorBar/#highValueField') and [lowValueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/lowValueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/valueErrorBar/#lowValueField') properties. To hide individual error bars, set the corresponding low and high values in the data source to `null`.

Alternatively, error bar values can be calculated according to an algorithm. In this case, use the [type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/valueErrorBar/#type') property to choose a required algorithm, and use the [value](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/valueErrorBar/value.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/valueErrorBar/#value') property to specify the value to be used in calculation.

[note]Error bars are available for axes of the numeric [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type') only.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ErrorBars/"
}