In the row mode, all changes made in grid rows are reflected in the data source immediately after the row switches from the editing state back to the normal state.

* **Editing**		
Each row in the row mode is supplied with the *"Edit"* button. When a user clicks this button, the respective row enters the editing state. At the same time, the *"Save"* and *"Cancel"* buttons appear in place of the *"Edit"* button. A user must click the *"Save"* button to save changes or the *"Cancel"* button to discard them.

	![DevExtreme DataGrid EditingRowMode](/images/DataGrid/EditingRowMode.gif)

	[note] When a grid row is in the editing state, and a user clicks the *"Edit"* button of another row, the former one switches its state to normal. All changes made in this row (if any) vanish.

* **Insertion**		
To insert a new row, a user must click the *"Add"* button indicated by a cross glyph on a grid.

	![DevExtreme DataGrid InsertionRowMode](/images/DataGrid/InsertionRowMode.gif)

* **Removing**		
To remove a row, a user must click the *"Delete"* button accompanying this row. This will cause **DataGrid** to display a pop-up window requesting the user to confirm the deletion of the row.

	![DevExtreme DataGrid RemovingRowMode](/images/DataGrid/RemovingRowMode.gif)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgrideditingrow/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>