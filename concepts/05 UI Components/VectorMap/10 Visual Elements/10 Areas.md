An area is the fundamental element of the VectorMap UI component. Map areas usually represent geographical objects, such as countries, continents, etc.

![DevExtreme ChartJS VectorMap](/images/ChartJS/MapAreas.png)

#####See Also#####
- [Vector Map - Data for Areas](/concepts/05%20UI%20Components/VectorMap/20%20Providing%20Data/10%20Data%20for%20Areas '/Documentation/Guide/UI_Components/VectorMap/Providing_Data#Data_for_Areas')

You can configure map areas using fields of the [layer](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/') object, whose [type](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#type') is *'area'*.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'area',
			// area settings are specified here
		},
			// ...
		]
	};

The following list provides a brief overview of area features that can be configured using this object.

* **Color**		
You can specify colors for areas using the [color](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/color.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#color') property and for their borders using the [borderColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/borderColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#borderColor') property. In addition, you can use a palette to colorize your map. Using a palette requires several properties to be specified. To get a step-by-step guide on applying a palette to your map, refer to the [palette](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/palette.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#palette') property description.

* **Appearance in the Hovered State**		
When a user hovers the mouse pointer over an area, this area enters the [hovered state](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/30%20Hovering/10%20Hovering.md '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Hovering'). You can specify a color for an area in this state using the [hoveredColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredColor') property. Additionally, you can change the appearance of the area border using the [hoveredBorderColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredBorderColor') and [hoveredBorderWidth](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredBorderWidth.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredBorderWidth') properties.

* **Appearance in the Selected State**		
If you have implemented the [selection](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/50%20Selection/10%20Selection.md '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Selection') capability in your map, customize the appearance of areas in the selected state. Similarly to the appearance of areas in the hovered state, you can specify a color for areas in the selected state using the [selectedColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/selectedColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#selectedColor') property, and a color and a width for the area border using the [selectedBorderColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/selectedBorderColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#selectedBorderColor') and [selectedBorderWidth](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/selectedBorderWidth.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#selectedBorderWidth') properties.

Specified directly in the **layer** object, these properties are applied to all map elements. To set them for specific areas, determine these properties in the object returned by the [customize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use an **elements** array to get all [layer elements](/api-reference/10%20UI%20Components/dxVectorMap/6%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/'). This object is passed to the **customize** function as the argument.

	<!--JavaScript-->var vectorMapOptions = {
		// ...
		layers: [{
			type: 'area',
			customize: function (elements) {
                for (i in elements) {
                    if (elements[i].attribute('name') == 'France')
                        elements[i].applySettings({ color: 'blue' });  // paints the 'France' area in blue
                }
			}
		}]
	};