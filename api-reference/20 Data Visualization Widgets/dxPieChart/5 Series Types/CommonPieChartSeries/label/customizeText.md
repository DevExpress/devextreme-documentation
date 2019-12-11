---
type: function(pointInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed by point labels.

##### param(pointInfo): Object
Defines the point value to be displayed in a label.

##### return: String
The text to be displayed in a label.

---
When implementing a callback function for this property, use the point value to be displayed in a label. In addition, you can use the argument of the currently displayed value. These values can be accessed using the following properties of the **this** object.

* **value**   
Specifies the value of the currently represented point.
* **valueText**   
Specifies the value of the currently represented point with applied formatting if the [format](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#format') property is specified.
* **argument**   
Specifies the argument value of the currently represented point.
* **argumentText**   
Specifies the argument value of the currently represented point with applied formatting if the [argumentFormat](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/argumentFormat.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#argumentFormat') property is specified.
* **percent**    
Specifies the proportional value of the currently represented point in a floating point format.
* **percentText**    
Specifies the value of the currently represented point as a percentage with a precision of the **format**.**percentPrecision** option.
* **point.tag**        
Specifies the tag of the currently represented point.

The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the value that is currently represented by a label.

To get general information on data formatting, refer to the [Data Formatting](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/30%20Data%20Formatting '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/') topic.