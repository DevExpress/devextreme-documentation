---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.valueErrorBar.type
type: Enums.ValueErrorBarType | undefined
default: undefined
---
---
##### shortDescription
Specifies how error bar values must be calculated.

---
Depending on the type of errors you need to visualize, use the error bars of one of the following types.

- **percent**        
Defines the <a href="http://en.wikipedia.org/wiki/Confidence_interval" target="_blank">confidential interval</a> in percentages. Error bar values are calculated as a percentage of the series point value. The percentage value is determined by the **value** property. The high and low error bar values are drawn symmetrically up and down from the series point.

- **stdError**        
For information on the standard error, refer to the <a href="http://en.wikipedia.org/wiki/Standard_error" target="_blank">article</a> in Wikipedia.

- **stdDeviation**        
For information on the standard deviation, refer to the <a href="http://en.wikipedia.org/wiki/Standard_deviation" target="_blank">article</a> in Wikipedia.

- **variance**        
For information on variance, refer to the <a href="http://en.wikipedia.org/wiki/Variance" target="_blank">article</a> in Wikipedia.

- **fixed**        
Defines the confidential interval in constant values. Error bar values are determined by the **value** property. The high and low error bar values are drawn symmetrically up and down from the series point.
