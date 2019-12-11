---
type: function(labelInfo)
---
---
##### shortDescription
Specifies a callback function that returns an object with options for a specific point label.

##### param(labelInfo): object
Information on the label to be customized

##### return: Label
A configuration object for the label

---
By default, all point labels on a chart are displayed identically. But you can specify different appearance for specific labels using the **customizeLabel** field. Assign a function to this field. This function should return an object with options that should be changed for a certain label. Refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/label/') object description to learn about the options that can be changed.

When implementing a callback function for this option, you can access the following fields of the function's parameter.

* **seriesName**  
The name of the current series.
* **argument**	
The argument of the label's point.
* **value**		
The value of the label's point.
* **tag**	
The tag of the label's point.
* **index**		
The index of the label's point in the points array.

In addition, these values can be accessed using the **this** object.