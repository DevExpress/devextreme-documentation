---
id: dxChart.Options.seriesTemplate
type: Object
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Defines properties for the series template.

---
In most cases, you can organize the array that is assigned to the chart's [dataSource](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource') property in the following way.

    [
        {arg: arg1Value, series1Value: val11, series2Value: val12, ...}
        {arg: arg2Value, series1Value: val21, series2Value: val22, ...}
        ...
        {arg: argNValue, series1Value: valN1, series2Value: valN2, ...}
    ]

Each object that is included in the array represents an argument value and the values of all series for this argument.

However, there are some scenarios in which you do not know exactly how many series will be added. In these cases, you will not be able to define the data source in the manner detailed above. Instead, define it in the following way.

    [
        {seriesName: series1, arg: arg11Value, val: value11 }
        {seriesName: series1, arg: arg12Value, val: value12 }
        ...
        {seriesName: seriesM, arg: argM1Value, val: valueM1 }
        {seriesName: seriesM, arg: argM2Value, val: valueM2 }
        ...
    ]

If you define a data source in this manner, set the argument and value fields using the [argumentField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/argumentField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField') and [valueField](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings/valueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#valueField') properties of the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') configuration object (for all series at once). Then, define a template for the series using the **seriesTemplate** configuration object. Within this object, set the data source field that specifies the series name to the **nameField** property. 

If you need to specify individual values for properties of a particular series, assign a callback function to the **customizeSeries** property of the **seriesTemplate** object.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SeriesTemplates/"
}