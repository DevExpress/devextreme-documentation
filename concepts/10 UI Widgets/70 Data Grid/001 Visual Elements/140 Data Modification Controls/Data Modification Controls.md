**DataGrid** provides the capability to [modify](/concepts/10%20UI%20Widgets/70%20Data%20Grid/070%20Data%20Editing/10%20Data%20Editing.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Editing/') data it contains. Data modification can be conducted in three **edit modes**: *row*, *batch* and *cell*. In addition, data modification can be restricted to only one or several operations, e.g., editing only, or removing and insertion. These parameters are specified by properties of the [editing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/') object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		editing: {
			mode: 'batch', // Specifying the edit mode
			allowUpdating: true, // Enable editing
			allowAdding: true, // Enable insertion
			allowDeleting: true // Enable removing
		}
    });

Depending on the specified properties of the **editing** object, a certain set of controls is presented in a grid. For more information on these controls, see the following subtopics.