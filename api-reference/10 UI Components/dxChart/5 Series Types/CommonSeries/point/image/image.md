---
id: dxChartSeriesTypes.CommonSeries.point.image
type: String | undefined | Object
default: undefined
---
---
##### shortDescription
Substitutes the [standard point symbols](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/symbol.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/point/#symbol') with an image.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
To display an image instead of series points, assign its URL to the **url** property. If needed, resize the image using the **height** and **width** properties. Otherwise, you can assign the URL directly to the **image** property.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointImage/"
}