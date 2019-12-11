---
type: function(pointsInfo)
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(pointsInfo): object
Defines different types of values indicated by the widget.

##### return: object
The text or markup to be displayed in a tooltip, along with that tooltip's color.

---
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**		
Specifies the [color](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/Configuration/tooltip/#color') of a tooltip.

- **text**		
Specifies the text displayed by a tooltip.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**		
Specifies the color of the text displayed by a tooltip.

- **borderColor**		
Specifies the color of the tooltip border.

When implementing a callback function for this option, you can access the main and target bullet values. For this purpose, use the following fields of the **this** object.

- **originalValue**    
Contains the primary bullet value as it is assigned to the **value** option.
- **value**   
Contains the primary bullet value with applied formatting if the **format** option is specified.
- **originalTarget**    
Contains the target bullet value as it is assigned to the **target** option.
- **target**   
Contains the target bullet value with applied formatting if the **format** option is specified.

The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the main and target bullet values.

To get general information on data formatting, refer to the [Data Formatting](/concepts/20%20Data%20Visualization/40%20Common/30%20Data%20Formatting '/Documentation/Guide/Data_Visualization/Common/Data_Formatting/') topic.