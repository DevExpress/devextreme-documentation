Hover-related marker settings reside in its [layer](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/') configuration object. Map markers have all the same hovering properties that [map areas](/concepts/05%20UI%20Components/VectorMap/40%20End-User%20Interaction/30%20Hovering/20%20Area%20Hover.md '/Documentation/Guide/UI_Components/VectorMap/End-User_Interaction/#Hovering/Area_Hover') have: [hoverEnabled](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoverEnabled.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoverEnabled') switches the hovering on/off, [hoveredColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredColor') and [hoveredBorderColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredBorderColor') specify the color of markers and their borders.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'marker',
			// ...
			hoverEnabled: true, // enables hovering (as hovering is enabled by default, may not be set)
			hoveredColor: 'blue', // paints markers blue in the hovered state
			hoveredBorderColor: 'red' // paints marker borders red in the hovered state
		}]
	};

Being set directly in the marker **layer**, the color-specifying properties are applied to all map markers at once. To set these properties for a specific marker, specify them within the object returned by the [customize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') object to identify the marker. This object is accessible using the function's argument as well as using the **this** object.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'marker',
			// ...
			hoveredColor: 'blue', // paints markers blue in the hovered state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('text') == 'Memphis') {
						element.applySettings({ hoveredColor: 'green' }); // paints 'Memphis' green in the hovered state
					}
				});
			}
		}]
	};