---
id: dxRangeSelector.Options.scale
type: Object
---
---
##### shortDescription
Specifies options of the range selector's scale.

---
To divide a scale, either set the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource') property or the [startValue](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/startValue.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#startValue') and [endValue](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/endValue.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#endValue') properties. In the former case, the start and end values will be calculated based on the values provided by the data source field that is set by the [dataSourceField](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/dataSourceField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSourceField') property.

The scale's ticks are arranged automatically, based on the start and end values, so that the tick labels do not overlap each other. You can set a custom tick interval, add minor ticks and format tick labels. These and other scale options are available in the **scale** configuration object.