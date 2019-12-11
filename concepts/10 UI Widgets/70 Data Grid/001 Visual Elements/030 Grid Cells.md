A grid cell is formed at the intersection of a [grid row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') and a [grid column](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/010%20Grid%20Columns '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns'). Although a grid has many types of cells, such as filter row cells and column header cells, a "grid cell" mainly refers to a cell holding data.

![DevExtreme DataGrid GridCell](/images/DataGrid/GridCell.png)

A grid cell can be in a normal or editing state. The appearance of a grid cell depends on the [type of data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') that its column contains. The following image shows how cells that belong to columns of different types look like in the normal and editing states.

![DevExtreme DataGrid GridCell](/images/DataGrid/GridCells_TwoStates.png)

Although the appearance of a grid cell is determined by its column settings, there are several grid properties that allow you to perform cell-level customizations. After a cell has been rendered, you can apply final customizations to it. For this purpose, assign a function to the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared') property. This function will be executed when the [cellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellPrepared') event fires.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		onCellPrepared: function (eventInfo) {
			// ...
		}
    });

Usually, implementing the **onCellPrepared** function is sufficient for grid cells to appear according to your specifications. However, some scenarios require you to define grid cells in full. In that case, implement a cell template and assign it to the [cellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') property of the column, which the cell belong to. Similarly, you can specify a template for a cell in the editing state using the [editCellTemplate](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/editCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate') property. Different grid columns can have different templates specified.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [{
				dataField: 'CompanyName',
				cellTemplate: function(cellElement, cellInfo) {
					// ... 
				},
				editCellTemplate: function(cellElement, cellInfo) {
					// ...
				}
			}, {
				dataField: 'ContactName',
				cellTemplate: function(cellElement, cellInfo) {
					// ... 
				},
				editCellTemplate: function(cellElement, cellInfo) {
					// ...
				}
			}
			// ...
		]
    });