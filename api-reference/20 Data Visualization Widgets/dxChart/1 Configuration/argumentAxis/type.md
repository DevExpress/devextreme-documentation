---
id: dxChart.Options.argumentAxis.type
acceptValues: 'continuous' | 'discrete' | 'logarithmic'
type: String
default: undefined
---
---
##### shortDescription
Specifies the type of the argument axis.

---
The argument axis can have one of the following types.

- **Continuous**        
Displays numeric and date-time arguments. To divide this axis into intervals, use the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/') option.
- **Discrete**       
Displays string arguments called "categories". To sort them, use the [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories') array.
- **Logarithmic**       
Displays numeric arguments. Each argument is the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase') value raised to some power. For example, **logarithmBase** equaling to 10 produces the following arguments: 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, etc. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values.

Normally, there is no need to specify this option, because the axis type is determined automatically depending on the [type of arguments](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType'). However, you may force the use of a specific axis type, for example, to employ the *"discrete"* axis type with numeric or date-time arguments.

#include common-ref-enum with {
    enum: "`AxisScaleType`",
    values: "`Discrete`, `Continuous`, and `Logarithmic`"
}