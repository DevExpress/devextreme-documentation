Selection can be conducted in single or multiple mode. In single mode, which is enabled by default, only one map area or marker can be in the selected state at a time. In multiple mode, several map areas or markers can be in the selected state at the same time. To specify the required mode, use the [selectionMode](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/selectionMode.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#selectionMode') option of a layer.

	<!--JavaScript-->var vectorMapCfg = {
		// ...
		layers: [{
			// ...
			selectionMode: 'single' // 'multiple' | 'none'
		}]
	};

In addition, you can use the **selectionMode** option to disable the selection capability. For this purpose, assign *'none'* to this option.