---
uid: viz\chart:dxChartValueAxis.type
---
---
##### shortDescription
Specifies the type of the value axis.

---
<!--
The value axis can have one of the following types.

- **Continuous**        
Displays numeric and date-time values. To divide this axis into intervals, use the [tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tickInterval/') property.
- **Discrete**       
Displays string values called "categories". To sort them, use the [categories](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/categories.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#categories') array.
- **Logarithmic**       
Displays numeric values. Each value is the [logarithmBase](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#logarithmBase') value raised to some power. For example, **logarithmBase** equaling to 10 produces the following values: 10&lt;sup&gt;-2&lt;/sup&gt;, 10&lt;sup&gt;-1&lt;/sup&gt;, 10&lt;sup&gt;0&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;2&lt;/sup&gt;, etc. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values.

Normally, there is no need to specify this property, because the axis type is determined automatically depending on the [type of values](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/valueType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#valueType'). However, you may force the use of a specific axis type, for example, to employ the *"discrete"* axis type with numeric or date-time values.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LogarithmicAxis/"
}
-->