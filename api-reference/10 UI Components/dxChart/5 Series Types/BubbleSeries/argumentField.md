---
##### merge

---
Each point in a bubble series has an argument, a regular value and a size value. Arguments are provided by the **argumentField**; regular values are provided by the **valueField**; size values are provided by the **sizeField**.

Commonly, when a chart contains several series, many of them have the same argument and size fields. In this case, assign their names to the **argumentField** and **sizeField** properties of the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object. If a series must have unique argument and size fields, specify the same properties, but do so in the series object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array.