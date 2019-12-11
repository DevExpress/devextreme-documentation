---
id: dxRangeSelector.Options.chart.dataPrepareSettings
type: Object
---
---
##### shortDescription
An object providing options for managing data from a data source.

---
When values from a data source are of a different type, they may be displayed incorrectly on the **RangeSelector**'s chart. To resolve this situation, use the options provided by the **dataPrepareSettings** configuration object. You can enable/disable data validation using the **checkTypeForAllData** option, or specify whether or not to convert the data source values to the type of the axis using the **convertToAxisDataType** option. In addition, you can sort the series points using the **sortingMethod** option.