---
id: dxRangeSelector.Options.chart.dataPrepareSettings
type: Object
---
---
##### shortDescription
An object providing properties for managing data from a data source.

---
When values from a data source are of a different type, they may be displayed incorrectly on the RangeSelector's chart. To resolve this situation, use the properties provided by the **dataPrepareSettings** configuration object. You can enable/disable data validation using the **checkTypeForAllData** property, or specify whether or not to convert the data source values to the type of the axis using the **convertToAxisDataType** property. In addition, you can sort the series points using the **sortingMethod** property.