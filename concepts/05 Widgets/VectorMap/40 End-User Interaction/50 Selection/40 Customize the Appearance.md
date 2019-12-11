The appearance of map elements in the selected state can be customized using the [selectedColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedColor') and [selectedBorderColor](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/selectedBorderColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#selectedBorderColor') options. Both of them specify the color, only the former specifies it of map elements, while the latter specifies it of their borders.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			// ...
			selectedColor: 'blue', // paints the layer blue in the selected state
			selectedBorderColor: 'red' // paints the layer borders red in the selected state
		}]
	};

Note that specified directly in the layer configuration object, the **selectedColor** and **selectedBorderColor** options are applied to all map elements at once. If you need to set these options for a specific area or marker, specify them within the object returned by the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') function. When implementing this function, use an **elements** array to get all [layer elements](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/7%20Map%20Elements/Layer%20Element '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/'). This object is passed to the **customize** function as the argument.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'area',
			// ...
			selectedColor: 'blue', // paints areas blue in the selected state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('name') == 'California') {
						element.applySettings({ selectedColor: 'green' }); // paints 'California' green in the selected state
					}
				});
			}
		}, {
			type: 'marker',
			// ...
			selectedColor: 'blue', // paints markers blue in the selected state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('text') == 'Memphis')
						element.applySettings({ selectedColor: 'blue' });  // paints the 'Memphis' area in blue
				});
			}
		}],
	};