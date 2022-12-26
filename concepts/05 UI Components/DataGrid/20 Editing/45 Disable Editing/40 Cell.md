Handle the DataGrid [onEditorPreparing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing) event to conditionally set the **editorOptions.disabled** option. You also need to check the **parentType** parameter to determine to which row type this cell belongs: "dataRow" or "filterRow". To see for which editor this event raises, check the **dataField** parameter. Finally, check the **row.data** object which contains row data values.

    <!--JavaScript-->
    onEditorPreparing(e) {
	    if (e.dataField === "LastName" && e.parentType === "dataRow") {
	        e.editorOptions.disabled = e.row.data && e.row.data.FirstName === "";
	    }
    }

If you want to dynamically enable/disable an editor based on values in other row editors, specify the [setCellValue](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue) callback function for the columns which editors should affect other editors. To enable/disable specific cells for existing or new rows, check the **row.isNewRow** parameter.

#####See Also#####
- [Dynamically Change Editor Properties in the Editing State](/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Editor_Properties_in_the_Editing_State/)
