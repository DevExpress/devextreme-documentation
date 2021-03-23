Hover-related area settings reside in the [layer](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/') configuration object. By default, areas already respond to hovering over them, so there is no need to specify any properties. But if this feature is not required, assign **false** to the [hoverEnabled](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoverEnabled.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoverEnabled') field of the area **layer**.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            // ...
            hoverEnabled: false
        }]
	};

If you did not switch the hovering off, specify the appearance of areas in the hovered state using the [hoveredColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredColor') and [hoveredBorderColor](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#hoveredBorderColor') properties. Both of them specify the color, only the former specifies it for areas, while the latter specifies it for area borders.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            // ...
            hoveredColor: 'blue', // paints areas blue in the hovered state
            hoveredBorderColor: 'red' // paints area borders red in the hovered state
        }]
	};

Note that specified directly in the area **layer**, the **hoveredColor** and **hoveredBorderColor** properties are applied to all map areas at once. If you need to set these properties for a specific area, specify them within the object returned by the [customize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use the [Layer Element](/api-reference/10%20UI%20Components/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/') object to identify the area. This object is accessible using the function's argument as well as using the **this** object.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'area',
			// ...
			hoveredColor: 'blue', // paints areas blue in the hovered state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('name') == 'Kansas'
						element.applySettings({ hoveredColor: 'green' }); // paints 'Kansas' green in the hovered state
				});
			}
		}]
	};