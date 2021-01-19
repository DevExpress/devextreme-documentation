---
id: dxRangeSelector.Options.scale.valueType
acceptValues: 'datetime' | 'numeric' | 'string'
type: String
default: undefined
---
---
##### shortDescription
Specifies the type of values on the scale.

---
When the scale is built on values from a [data source](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#dataSource'), scale values and data source values have the same type. For example, if numeric values are specified in the data source, scale values will also be of a numeric type. In some scenarios, you may need to convert data source values into another type if, for instance, numbers are stored as strings in your data source. In this case, use the **valueType** property to specify the type of scale values explicitly.

[note]If dates in your data source are stored as strings, make sure that they have a <a href="http://www.w3schools.com/js/js_date_formats.asp" target="_blank">valid format</a>.

#include common-ref-enum with {
    enum: "`ChartDataType`",
    values: "`Numeric`, `DateTime`, and `String`"
}

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/NumericScaleLightweight/",
    name: "Numeric Scale"
}
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/DateTimeScaleLightweight/",
    name: "Date-Time Scale"
}