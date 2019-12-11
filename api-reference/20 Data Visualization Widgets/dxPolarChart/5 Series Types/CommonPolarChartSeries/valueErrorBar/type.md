---
default: undefined
acceptValues: 'percent' | 'stdError' | 'stdDeviation' | 'variance' | 'fixed'
type: String
---
---
##### shortDescription
Specifies how error bar values must be calculated.

---
Depending on the type of errors you need to visualize, use the error bars of one of the following types.

- **percent**		
Defines the [confidential interval](https://en.wikipedia.org/wiki/Confidence_interval) in percentages. Error bar values are calculated as a percentage of the series point value. The percentage value is determined by the **value** option. The high and low error bar values are drawn symmetrically up and down from the series point.

- **stdError**		
For information on the standard error, refer to the [article](https://en.wikipedia.org/wiki/Standard_error) in Wikipedia.

- **stdDeviation**		
For information on the standard deviation, refer to the [article](https://en.wikipedia.org/wiki/Standard_deviation) in Wikipedia.

- **variance**		
For information on variance, refer to the [article](https://en.wikipedia.org/wiki/Variance) in Wikipedia.

- **fixed**		
Defines the confidential interval in constant values. Error bar values are determined by the **value** option. The high and low error bar values are drawn symmetrically up and down from the series point.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ValueErrorBarType` enum. This enum accepts the following values: `Percent`, `StdError`, `StdDeviation`, `Variance` and `Fixed`.