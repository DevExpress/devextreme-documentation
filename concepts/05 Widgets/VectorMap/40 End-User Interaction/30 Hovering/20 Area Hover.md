Hover-related area settings reside in the [layer](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/') configuration object. By default, areas already respond to hovering over them, so there is no need to specify any options. But if this feature is not required, assign **false** to the [hoverEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoverEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoverEnabled') field of the area **layer**.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            // ...
            hoverEnabled: false
        }]
	};

If you did not switch the hovering off, specify the appearance of areas in the hovered state using the [hoveredColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredColor') and [hoveredBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/hoveredBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#hoveredBorderColor') options. Both of them specify the color, only the former specifies it for areas, while the latter specifies it for area borders.

	<!--JavaScript-->var vectorMapCfg = {
        // ...
        layers: [{
            type: 'area',
            // ...
            hoveredColor: 'blue', // paints areas blue in the hovered state
            hoveredBorderColor: 'red' // paints area borders red in the hovered state
        }]
	};

Note that specified directly in the area **layer**, the **hoveredColor** and **hoveredBorderColor** options are applied to all map areas at once. If you need to set these options for a specific area, specify them within the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use the [Layer Element](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/') object to identify the area. This object is accessible using the function's argument as well as using the **this** object.

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