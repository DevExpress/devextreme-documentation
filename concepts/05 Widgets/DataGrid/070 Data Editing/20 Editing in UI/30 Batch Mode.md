In the batch mode, changes are buffered before being transmitted to the data source. Using this mode prevents the data source from excessive updates when editing is performed frequently.

* **Editing**		
In the batch mode, rows are edited by cells. When the user clicks a cell, it enters the editing state where the user changes its value. To switch the cell back to the normal state, the user clicks another cell or any other area of the grid. After that, changes made in the cell are saved in a buffer and the cell is marked as edited.

	![DevExtreme DataGrid EditingBatchMode](/images/DataGrid/EditingBatchMode.gif)

* **Insertion**		
To insert a new row, a user must click the *"Add"* button indicated on a grid by a cross glyph. The inserted row appears empty requiring the user to fill it with data. The following actions, in fact, edit this row: clicking a cell, entering a value, saving the value by clicking another cell.

	![DevExtreme DataGrid InsertionBatchMode](/images/DataGrid/InsertionBatchMode.gif)

* **Removing**		
To remove a row, a user must click the *"Delete"* button accompanying this row. The row will be marked as removed, while the *"Delete"* button will be replaced by the *"Undelete"* button recovering the row.

	![DevExtreme DataGrid RemovingBatchMode](/images/DataGrid/RemovingBatchMode.gif)

All changes made in a grid will not be transmitted to the data source until the user clicks the *"Save"* button represented on a grid by a floppy disk glyph. Next to this button, the *"Revert"* button locates, which discards all changes. Both these buttons are inactive until a change is made. While neither saved nor discarded, edited cells, added and deleted rows are highlighted.

[note] If the user closes the browser before saving changes in the data source, they will be lost.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingbatch/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>