---
default: undefined
acceptValues: 'fixed' | 'percent' | 'stdDeviation' | 'stdError' | 'variance'
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

#include common-ref-enum with {
    enum: "`ValueErrorBarType`",
    values: "`Percent`, `StdError`, `StdDeviation`, `Variance`, and `Fixed`"
}