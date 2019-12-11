A tooltip is a small popup rectangle containing information about an [area](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/10%20Areas.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Areas') or a [marker](/concepts/05%20Widgets/VectorMap/10%20Visual%20Elements/20%20Markers.md '/Documentation/Guide/Widgets/VectorMap/Visual_Elements/#Markers') when a user hovers the mouse pointer over it. In common cases, a tooltip is required to display the name of the area or marker. However, it can display any information you may find useful.

![DevExtreme ChartJS VectorMap](/images/ChartJS/MapTooltip.png)

Tooltips are configured using fields of the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/') object. By default, they are disabled. To enable them, assign **true** to the [enabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/#enabled') field of the **tooltip** object.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		tooltip: {
			enabled: true
		}
	};

Then, you are required to specify the text to be displayed by a tooltip. Implement a function returning an object with the **text** field set and assign this function to the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/#customizeTooltip') option. When implementing it, you can use the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') object passed to this function as the argument. To distinguish areas from markers, check the **layer.type** field of this object against being equal to *'area'* or *'marker'*. For example, the following code snippet shows how to provide text only for marker tooltips.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		tooltip: {
			// ...
			customizeTooltip: function (element) {
				if (element.layer.type == 'marker') {
					return { text: element.text };
				}
			}
		}
	};

Furthermore, there is a number of additional options specifying the appearance of tooltips. All of them are set in the **tooltip** configuration object. A structured overview of these options is given in the following list.

* **Color**			
You can specify the color of tooltips using the [color](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/#color') option. If you need to specify the color of a particular tooltip, assign it to the **color** field of the object returned by the **customizeTooltip** function. 

* **Font Settings**			
To change the font of the text displayed by a tooltip, use the fields of the [font](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/font/') object.

* **Border Appearance**		
You can change the visibility, color, width and other settings of the tooltip border using the fields of the [border](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/border/') configuration object.

* **Shadow**		
Tooltips are displayed casting a small shadow. To specify its blurriness, opacity, color and other settings, use [shadow](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/shadow '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/shadow/') object fields.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/TooltipHTMLSupport/"
}
