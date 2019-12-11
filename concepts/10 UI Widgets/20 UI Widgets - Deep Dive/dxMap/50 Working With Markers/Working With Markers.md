The [Map](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/') widget can display markers on the map. The array of displayed markers is held in the [markers](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#markers') option. Each item of the array is an object that can have the following properties.

- **location** (required)  
An object, a string, or an array specifying the marker location. Supports the same location formats as the [center](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/center/') option.
- **tooltip** (optional)  
Takes on an object containing the text and isShown fields. The text field specifies the tooltip text. The isShown field takes on a Boolean value that specifies whether a tooltip is visible by default or not. If the tooltip should be hidden by default, pass the tooltip text directly to the tooltip property.
- **onClick** (optional)  
A callback function performed when the marker is clicked.
- **iconSrc** (optional)  
A URL pointing to the custom icon to be used for the marker.