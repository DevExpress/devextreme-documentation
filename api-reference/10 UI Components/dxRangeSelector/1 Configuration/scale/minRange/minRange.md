---
id: dxRangeSelector.Options.scale.minRange
acceptValues: 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year'
type: Number | Object | String
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the minimum range that can be selected.

---
Use this property to set the minimum range that can be selected. When moving a slider to a position near the other slider that is closer than the specified minimum range, the marker will display the last possible value that it can be set to, and change the font color to 'red'. You can set the color used to indicate an invalid range by using the **invalidRangeColor** property of the [sliderMarker](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/sliderMarker/invalidRangeColor.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/sliderMarker/#invalidRangeColor') configuration object.

[note]For a [discrete scale](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type'), setting a minimum range is not a property. For a [semidiscrete scale](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/type.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/#type'), setting a minimum range is, conversely, required.

[note]The **minRange** property specifies the minimum range that can be selected in the UI. If you select a range in code, for example, using the [setValue(value)](/api-reference/10%20UI%20Components/dxRangeSelector/3%20Methods/setValue(value).md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Methods/#setValuevalue') method, the **minRange** property will be ignored.

You can also set the maximum range that can be selected using the [maxRange](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale/maxRange '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/maxRange/') property.