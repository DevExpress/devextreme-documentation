---
id: dxRangeSelector.Options.scale.maxRange
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the maximum range that can be selected.

---
Use this property to set the maximum range that can be selected. When trying to move a slider from the other slider further than the specified maximum range, the marker will display the last possible value that can be set and change the font color to 'red'. You can set which color to use to indicate an invalid range. For this purpose, use the **invalidRangeColor** property of the [sliderMarker](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/sliderMarker/invalidRangeColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor') configuration object.

In case of the numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values or an object to this property. The object's properties specify the number of days, hours, etc.

[note]Setting a maximum range is unavailable for a discrete scale.

You can also set a minimum range that can be selected, using the [minRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/minRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minRange/') property.