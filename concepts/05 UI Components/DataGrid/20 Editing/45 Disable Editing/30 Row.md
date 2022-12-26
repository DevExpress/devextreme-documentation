If you want to forbid editing in a specific row, take the following steps:
- Handle the DataGrid [onEditingStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart) event. 
- Check the **data** parameter's values and assign **true** to **e.cancel**.

    <!--JavaScript-->
    onEditingStart(e) {
        e.cancel = e.data.Position === "CEO";
    }

The DataGrid [editing mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode) defines whether to display the **Edit** button opposite every row. To hide this button for the required rows, use the button's [visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#visible) property. You can also assign a function to this property and check a row's data in a similar manner as in the DataGrid [onEditingStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditingStart) case.

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

