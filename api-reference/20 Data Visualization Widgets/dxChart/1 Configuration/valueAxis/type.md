---
default: undefined
acceptValues: 'discrete' | 'continuous' | 'logarithmic'
type: String
---
---
##### shortDescription
Specifies the type of the value axis.

---
The value axis can have one of the following types.

- **Continuous**        
Displays numeric and date-time values. To divide this axis into intervals, use the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tickInterval/') option.
- **Discrete**       
Displays string values called "categories". To sort them, use the [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#categories') array.
- **Logarithmic**       
Displays numeric values. Each value is the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#logarithmBase') value raised to some power. For example, **logarithmBase** equaling to 5 produces the following values: 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, 5<sup>3</sup> etc. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values.

Normally, there is no need to specify this option, because the axis type is determined automatically depending on the [type of values](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType'). However, you may force the use of a specific axis type, for example, to employ the *"discrete"* axis type with numeric or date-time values.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `AxisScaleType` enum. This enum accepts the following values: `Discrete`, `Continuous` and `Logarithmic`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureslogarithmicaxis/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>