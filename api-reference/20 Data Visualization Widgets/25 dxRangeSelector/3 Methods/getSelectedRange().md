---
##### shortDescription
Returns the currently selected range.

##### return: object
An object representing the start and end values of the currently selected range.

---
To obtain the currently selected range once, use the **getSelectedRange()** method. If you need to obtain the selected range each time it is modified, use the [onSelectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/onSelectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onSelectedRangeChanged') callback function.

To get the start and end values, use the **startValue** and **endValue** fields of the returned object, respectively.