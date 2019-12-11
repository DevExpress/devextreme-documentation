---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: number | object | string
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies the minimum range that can be selected.

---
Use this property to set the minimum range that can be selected. When moving a slider to a position near the other slider that is closer than the specified minimum range, the marker will display the last possible value that it can be set to, and change the font color to 'red'. You can set the color used to indicate an invalid range by using the **invalidRangeColor** property of the [sliderMarker](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/sliderMarker/invalidRangeColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor') configuration object.

[note]For a [discrete scale](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type'), setting a minimum range is not an option. For a [semidiscrete scale](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#type'), setting a minimum range is, conversely, required.

[note]The **minRange** property specifies the minimum range that can be selected in the UI. If you select a range in code, for example, using the [setSelectedRange(selectedRange)](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/3%20Methods/setSelectedRange(selectedRange).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#setSelectedRangeselectedRange') method, the **minRange** property will be ignored.

You can also set the maximum range that can be selected using the [maxRange](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/scale/maxRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/') property.