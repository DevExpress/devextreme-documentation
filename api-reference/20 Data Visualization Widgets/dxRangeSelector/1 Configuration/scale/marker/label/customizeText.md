---
type: function(markerValue)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed in scale markers.

##### param(markerValue): Object
Defines a marker value.

##### field(markerValue.value): Date|Number
Specifies the marker value.

##### field(markerValue.valueText): String
Specifies the value with applied <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/marker/label/#format">formatting</a>.

##### return: String
The text to be displayed by a scale label marker.

---
When implementing a callback function for this property, use the value to be displayed in the marker. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.