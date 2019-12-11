Selection in the **DataGrid** widget can be carried out in a single or multiple mode. To specify the mode, set the **selection** | [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode') option to either *'single'* or *'multiple'* as shown in the code snippet below. Setting this option is obligatory, because selection is disabled by default.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		selection: {
			mode: 'single' // 'multiple'
		}
    });