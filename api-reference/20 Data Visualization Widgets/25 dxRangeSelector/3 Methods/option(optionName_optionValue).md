---
##### shortDescription
Sets a value to the specified configuration option of the widget.

##### param(optionName): string
The name of the required option.

##### param(optionValue): any
The value to be assigned to the required option.

---
To set the value to the configuration option, specify the path to the field representing this option in the configuration object. For example, to set the **behavior** | **allowSlidersSwap** option of the **RangeSelector** widget to *true*, pass the "behavior.allowSlidersSwap" value as the **optionName** parameter and the "true" value as the **optionValue** parameter.