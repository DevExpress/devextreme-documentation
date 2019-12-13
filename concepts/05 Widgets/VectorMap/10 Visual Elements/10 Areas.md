An area is the fundamental element of the **VectorMap** widget. Map areas usually represent geographical objects, such as countries, continents, etc.

![DevExtreme ChartJS VectorMap](/images/ChartJS/MapAreas.png)

#####See Also#####
- [Vector Map - Data for Areas](/concepts/05%20Widgets/VectorMap/20%20Providing%20Data/10%20Data%20for%20Areas '/Documentation/Guide/Widgets/VectorMap/Providing_Data#Data_for_Areas')

You can configure map areas using fields of the [layer](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/') object, whose [type](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#type') is *'area'*.

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
You can specify colors for areas using the [color](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#color') option and for their borders using the [borderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/borderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#borderColor') option. In addition, you can use a palette to colorize your map. Using a palette requires several options to be specified. To get a step-by-step guide on applying a palette to your map, refer to the [palette](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#palette') option description.

* **Appearance in the Hovered State**		
When a user hovers the mouse pointer over an area, this area enters the [hovered state](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction/30%20Hovering/10%20Hovering.md '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Hovering'). You can specify a color for an area in this state using the [hoveredColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor') option. Additionally, you can change the appearance of the area border using the [hoveredBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor') and [hoveredBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderWidth') options.

* **Appearance in the Selected State**		
If you have implemented the [selection](/concepts/05%20Widgets/VectorMap/40%20End-User%20Interaction/50%20Selection/10%20Selection.md '/Documentation/Guide/Widgets/VectorMap/End-User_Interaction/#Selection') capability in your map, customize the appearance of areas in the selected state. Similarly to the appearance of areas in the hovered state, you can specify a color for areas in the selected state using the [selectedColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor') option, and a color and a width for the area border using the [selectedBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor') and [selectedBorderWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderWidth') options.

Specified directly in the **layer** object, these options are applied to all map elements. To set them for specific areas, determine these options in the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use an **elements** array to get all [layer elements](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/'). This object is passed to the **customize** function as the argument.

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