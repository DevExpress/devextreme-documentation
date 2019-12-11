---
type: function(scaleValue)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed in scale labels.

##### param(scaleValue): object
Defines a scale value.

##### field(scaleValue.value): Number
Specifies the scale value represented by a label.

##### field(scaleValue.valueText): string
Specifies the value with applied formatting if the <b>format</b> option is set.

##### return: string
The text to be displayed by a scale label.

---
When implementing a callback function for this property, use the scale value to be displayed in a label. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

For general information on data formatting, refer to the <a href="/Documentation/16_1/Guide/Data_Visualization/Common/Data_Formatting">Data Formatting</a> topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementsscalelabelformatting/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>