---
default: undefined
type: function(info)
---
---
##### notUsedInTheme

##### shortDescription
Specifies text and appearance of a set of tooltips.

##### param(info): Area object|Marker object
Defines the area/marker for which a tooltip is about to be displayed.

##### return: object
The text or markup to be displayed in a tooltip, along with that tooltip's color.

---
This option should be assigned a function that returns a specific object. The following fields can be specified in this object.

- **text**		
Specifies the text displayed by a tooltip. This is an obligatory option. If this option is not specified, the tooltip will not be shown.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **color**		
Specifies the [color](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/#color') of a tooltip.

- **fontColor**		
Specifies the color of the text displayed by a tooltip.

- **borderColor**		
Specifies the color of the tooltip border.

When implementing a callback function for this option, you can access the hovered area or marker. For this purpose, use the object passed as the function's parameter or the **this** object. To discover the members of the obtained object that can be used, see the [Area](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Area '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/') or [Marker](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/7%20Map%20Elements/Marker '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/') class description of the **Map Elements** reference section.