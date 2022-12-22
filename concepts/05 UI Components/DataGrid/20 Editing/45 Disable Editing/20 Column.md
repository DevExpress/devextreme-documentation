### Column
Set a column's [allowEditing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowEditing) property to **false** to prevent editing its data.

### Row
Handle the [DataGrid.onEditingStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart) event, check the **data** parameter's values and assign **true** to **e.cancel** if you want to forbid editing in a specific row.

    <!--JavaScript-->
    onEditingStart(e) {
        e.cancel = e.data.Position === "CEO";
    }

The DataGrid [editing mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode) defines whether to display the **Edit** button opposite every row. To hide this button for the required rows, use the button's [visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#visible) property. You can also assign a function to this property and check a row's data in a similar manner as in [DataGrid.onEditingStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart).

    <!--JavaScript-->
    columns: [
        {
            type: "buttons",
            buttons: [{
                name: "edit",
                visible: function(e) {
                    return e.row.data.Position !== "CEO";
                }
            }, "delete"]
        }, 
        // other columns
    ]

#####See Also#####
- [Customize the Edit Column](/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/#Customize_the_Edit_Column)

### Cell
Handle the [DataGrid.onEditingPreparing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing) event to conditionally set the **editorOptions.disabled** option. You also need to check the **parentType** parameter to determine to which row type this cell belongs: "dataRow" or "filterRow". To see for which editor this event raises, check the **dataField** parameter. Finally, check the **row.data** object which contains row data values.

    <!--JavaScript-->
    onEditorPreparing(e) {
	    if (e.dataField === "LastName" && e.parentType === "dataRow") {
	        e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
	    }
    }

If you want to dynamically enable/disable an editor based on values in other row editors, specify the [setCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue) callback function for the columns which editors should affect other editors. To enable/disable specific cells for existing or new rows, check the **row.isNewRow** parameter.

#####See Also#####
- [Dynamically Change Editor Properties in the Editing State](/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Editor_Properties_in_the_Editing_State/)
