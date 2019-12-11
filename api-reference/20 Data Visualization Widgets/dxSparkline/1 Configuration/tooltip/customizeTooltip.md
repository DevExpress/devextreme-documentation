---
type: function(pointsInfo)
---
---
##### shortDescription
Allows you to change the appearance of specific tooltips.

##### param(pointsInfo): object
Defines different types of values indicated by a sparkline.

##### return: object
The text or markup to be displayed in a tooltip and its color.

---
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**		
Specifies the [color](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/tooltip/#color') of a tooltip.

- **text**		
Specifies the text displayed by a tooltip.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**		
Specifies the color of the text displayed by a tooltip.

- **borderColor**		
Specifies the color of the tooltip border.

When implementing a callback function for this option, you can access different types of values indicated by a sparkline. For this purpose, use the following fields of the **this** object.

* **originalFirstValue**    
Contains the first value of a sparkline as it is specified in a data source.
* **firstValue**   
Contains the first value of a sparkline with applied formatting if the **format** option is specified.
* **originalLastValue**    
Contains the last value of a sparkline as it is specified in a data source.
* **lastValue**   
Contains the last value of a sparkline with applied formatting if the **format** option is specified.
* **originalMinValue**    
Contains the minimum value of a sparkline as it is specified in a data source.
* **minValue**   
Contains the minimum value of a sparkline with applied formatting if the **format** option is specified.
* **originalMaxValue**    
Contains the maximum value of a sparkline as it is specified in a data source.
* **maxValue**   
Contains the maximum value of a sparkline with applied formatting if the **format** option is specified.

The following fields are available for a sparkline of the 'winloss' [type](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#type') only.

* **originalThresholdValue**    
Contains the threshold value of a winloss sparkline as it is assigned to the [winlossThreshold](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/winlossThreshold.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#winlossThreshold') option.
* **thresholdValue**   
Contains the threshold value of a winloss sparkline with applied formatting if the **format** option is specified.

To access the fields above, you can use the function's parameter as well as the **this** object.

To get general information on data formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') topic.