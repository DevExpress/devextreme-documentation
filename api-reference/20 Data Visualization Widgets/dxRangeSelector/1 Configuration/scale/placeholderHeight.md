---
id: dxRangeSelector.Options.scale.placeholderHeight
type: Number
default: undefined
---
---
##### shortDescription
Specifies the height of the space reserved for the scale in pixels.

---
The scale's height includes the space occupied by scale labels, markers, and the space between the scale labels and markers.

You may need to set this property when you need to know the exact size of the **RangeSelector** widget elements in vertical and horizontal directions. For instance, this may be required when displaying an image in the background in a stretched mode. To get the background height, subtract the scale's placeholder size and the slider markers' [placeholder height](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/sliderMarker/placeholderHeight.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#placeholderHeight') from the **RangeSelector**'s [height](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/size/height.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/size/#height').

![RangeSelectorScalePlaceholderheight ChartJS](/images/ChartJS/RangeSelectorScalePlaceholderheight.png)