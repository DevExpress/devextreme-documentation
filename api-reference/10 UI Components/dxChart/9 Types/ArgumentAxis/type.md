---
uid: viz/chart:ArgumentAxis.type
type: Enums.AxisScaleType | undefined
default: undefined
---
---
##### shortDescription
Specifies the type of the argument axis.

---
<!--
The argument axis can have one of the following types.

- **Continuous**        
Displays numeric and date-time arguments. To divide this axis into intervals, use the [tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tickInterval/') property.
- **Discrete**       
Displays string arguments called "categories". To sort them, use the [categories](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#categories') array.
- **Logarithmic**       
Displays numeric arguments. Each argument is the [logarithmBase](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#logarithmBase') value raised to some power. For example, **logarithmBase** equaling to 10 produces the following arguments: 10&lt;sup&gt;-2&lt;/sup&gt;, 10&lt;sup&gt;-1&lt;/sup&gt;, 10&lt;sup&gt;0&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;2&lt;/sup&gt;, etc. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values.

Normally, there is no need to specify this property, because the axis type is determined automatically depending on the [type of arguments](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#argumentType'). However, you may force the use of a specific axis type, for example, to employ the *"discrete"* axis type with numeric or date-time arguments.


-->