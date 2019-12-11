This subtopic describes controls that appear in the **DataGrid** widget when the [edit mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') property is set to *"batch"*. These controls are illustrated by the image below.

![DevExtreme DataGrid Editing](/images/DataGrid/EditingBatch.png)

Depending on the specified properties of the [editing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/') object, different controls are presented in a grid. These controls and the options that enable them are listed below. Note that the "Save" and "Revert" buttons appear in a grid even if only one of the **allowUpdating**, **allowAdding** or **allowDeleting** properties is *true*.

* **allowUpdating** is *true*		
No extra buttons are added.

* **allowAdding** is *true*		
This setting adds the "Add" button to the upper-right corner of the **DataGrid** widget.

* **allowDeleting** is *true*		
This setting adds the "Delete" button to each grid row. When a user clicks one of these buttons, it is substituted by the "Undelete" button.

In addition, the text of a certain button can be changed using the fields of the **editing** | [texts](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/texts '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts/') object (if this button is not represented by an icon). 

<div class="simple-table">
<table>
	<tr>
		<th>Button</th>
		<th>Field</th>
	</tr>
	<tr>
		<td>Delete</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#deleteRow">deleteRow</a></td>
	</tr>
	<tr>
		<td>Undelete</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#undeleteRow">saveRowChanges</a></td>
	</tr>
	<tr>
		<td>Add</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#addRow">addRow</a> <sup><em>h</em></sup></td>
	</tr>
	<tr>
		<td>Save</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#saveAllChanges">saveAllChanges</a> <sup><em>h</em></sup></td>
	</tr>
	<tr>
		<td>Revert</td>
		<td><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/texts#cancelAllChanges">cancelAllChanges</a> <sup><em>h</em></sup></td>
	</tr>
</table>
</div>

[note] The <sup>*h*</sup> mark directs the property to specify text for the hint that appears when a user hovers the mouse pointer over a button, but not for that button.