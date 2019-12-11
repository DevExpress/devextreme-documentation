---
type: function(pointInfo)
---
---
##### shortDescription
Specifies a callback function that returns an object with options for a specific point.

##### param(pointInfo): object
Information on the point to be customized

##### return: Point
A configuration object for the point

---
By default, all the points of a pie are displayed identically. But you can specify different appearance for certain points using the **customizePoint** field. Assign a function to this field. This function should return an object with options that should be changed for a certain point. The following pie options can be changed.

* [border](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/border/')
* [color](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/#color')
* [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/hoverStyle/')
* [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/selectionStyle/')

When implementing a callback function for this option, use the argument or value of a point. They can be accessed using the following fields of the function's parameter.

* **argument**	
The argument of the point.
* **value**		
The value of the point.
* **tag**	
The tag of the point.
* **index**		
The index of the point in the points array.

In addition, these values can be accessed using the **this** object.