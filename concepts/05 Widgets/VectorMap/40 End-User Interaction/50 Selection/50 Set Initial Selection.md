Map elements may appear selected when the map is loaded. To accomplish this, implement the [customize](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/#customize') function that must return an object with the **isSelected** field set to **true** for those areas or markers that must appear selected. The following code snippet provides an example of implementing this function.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			type: 'area',
			// ...
			selectedColor: 'blue', // paints areas blue in the selected state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('name') == 'Ohio') {
						element.applySettings({ isSelected: true }); // makes 'Ohio' appear selected
					}
				});
			}
		}, {
			type: 'marker',
			// ...
			selectedColor: 'blue', // paints markers blue in the selected state
			customize: function (elements) {
				$.each(elements, function (i, element) {
					if (element.attribute('text') == 'Detroit')
						element.applySettings({ isSelected: true }); // makes 'Detroit' appear selected
				});
			}
		}],
	};