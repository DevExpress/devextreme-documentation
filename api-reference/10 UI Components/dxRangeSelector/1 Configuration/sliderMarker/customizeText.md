---
id: dxRangeSelector.Options.sliderMarker.customizeText
type: function(scaleValue)
notUsedInTheme: 
---
---
##### shortDescription
Specifies a callback function that returns the text to be displayed by slider markers.

##### param(scaleValue): Object
Information on the scale value.

##### field(scaleValue.value): Date | Number | String
The raw value.

##### field(scaleValue.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/sliderMarker/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker#format') value converted to a string.

##### return: String
The text for the slider marker to display.

---
#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Range_Selector/CustomFormatting/"
}