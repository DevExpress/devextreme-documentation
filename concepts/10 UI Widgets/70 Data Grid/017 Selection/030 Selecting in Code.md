**DataGrid** provides several methods with which to perform selection in code. If you have row keys, call the [selectRows(keys, preserve)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/selectRows(keys_preserve).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowskeys_preserve') method passing them as the first argument. If you only have data objects, obtain the keys using the [keyOf(obj)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/keyOf(obj).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#keyOfobj') method and then call the **selectRows(keys, preserve)** method.

	<!--JavaScript-->var key = dataGridInstance.keyOf(dataObject);
	dataGridInstance.selectRows(key);

[note]Calling this method with one argument deselects previously selected records. If you need these records to remain selected, call this method with *true* as the second argument.

Additionally, you can select rows by their indexes using the [selectRowsByIndexes(indexes)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/selectRowsByIndexes(indexes).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectRowsByIndexesindexes') method. 

	<!--JavaScript-->dataGridInstance.selectRowsByIndexes([1, 8, 6]);

When row indexes are being calculated, data and group rows are counted, though only data rows can be selected. Refer to the [Grid Rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') article to get more information on how to calculate row indexes.

[note] Unlike **selectRows(keys, preserve)**, the **selectRowsByIndexes(indexes)** method applies selection that will be cleared automatically once the current page is changed. Therefore, to preserve this selection, call this method within the [onContentReady](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContentReady') function.

If you need to select all rows in a grid, call the [selectAll()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll') method.

	<!--JavaScript-->dataGridInstance.selectAll();

Selection can also be cleared in code by calling the [clearSelection()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSelection') method.

	<!--JavaScript-->dataGridInstance.clearSelection();

If you need to deselect specific records, call the [deselectRows(keys)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectRowskeys') method.

	<!--JavaScript-->dataGridInstance.deselectRows([4, 6, 1]);