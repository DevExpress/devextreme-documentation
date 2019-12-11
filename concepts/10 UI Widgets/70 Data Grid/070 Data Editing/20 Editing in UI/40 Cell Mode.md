In cell mode, all changes made in grid cells are reflected in the data source immediately after the cell switches from the editing state back to the normal state. 

* **Editing**		
When a user clicks a cell, the latter enters the editing state where the user changes its value. To switch the cell back to the normal state, the user clicks another cell or any other area of the grid. After that, changes made in the cell are instantly reflected in the data source. To switch the cell back to the normal state without saving changes, use the **Esc** key.

	[note] If **validation** is configured for the data grid, an end-user will be locked in the cell's editing state until he/she enters a valid value or clicks the "Cancel Changes" button.

	#####See Also#####
	- [Validation Engine](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation '/Documentation/Guide/UI_Widgets/Common/Validation/')
	- [Validation Engine - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/')

	![DevExtreme DataGrid EditingRowMode](/images/DataGrid/EditingCellMode.gif)

* **Insertion**		
To insert a new row, a user must click the *"Add"* button indicated by a cross glyph on a grid. The new row will be added to the data source after losing focus.

	[note] If **validation** is configured for the data grid, an end-user will be locked in the row's editing state until he/she enters valid values or cancels the row insertion using the "Cancel Changes" button of any invalid cell.

	#####See Also#####
	- [Validation Engine](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation '/Documentation/Guide/UI_Widgets/Common/Validation/')
	- [Validation Engine - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/')

	![DevExtreme DataGrid InsertionRowMode](/images/DataGrid/InsertionCellMode.gif)

* **Removing**		
To remove a row, a user must click the *"Delete"* button accompanying this row. This will cause **DataGrid** to display a pop-up window requesting that the user confirms the deletion of the row.

	![DevExtreme DataGrid RemovingRowMode](/images/DataGrid/RemovingRowMode.gif)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingcell/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>