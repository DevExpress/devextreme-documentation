Command columns are columns used for interaction with an end-user. There are three types of command columns: **editing column**, **selection column** and **adaptive column**. The **editing column** appears when the **editing** | [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') option is set to *"batch"* or *"form"*. The **selection column** appears when the **selection** | [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode') option is set to *'multiple'*, provided that the [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#showCheckBoxesMode') option is not *'none'*. The **adaptive column** appears when the [columnHidingEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled') option is set to *true* and the total column width does not fit into the screen or container size.

![](/Content/images/doc/16_1/DataGrid/Command_Columns.png)

You can modify the position and width of a command column using its [visibleIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visibleIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex') and [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') options respectively. These options can be modified at runtime using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue'). To modify options of the **selection**, **editing** or **adaptive** column, pass the "command:select", "command:edit", or "command:adaptive" string respectively to the **id** argument of this method.

[note] The default **visibleIndex** value of the **selection column** is -1. To place a column before the **selection column**, use indexes lower than -1.

The example below demonstrates how to swap command columns.

	<!--JavaScript-->dataGrid.columnOption("command:select", "visibleIndex", 999);
	dataGrid.columnOption("command:edit", "visibleIndex", -2);
	dataGrid.columnOption("command:adaptive", "visibleIndex", -1)

You can also modify cells of command columns using the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared') event. If the event fires for a cell of the **selection**, **editing**, or **adaptive** column, the **column** field of the event argument object contains the **command** field holding the "select", "edit", or "adaptive" value respectively.

    <!--JavaScript-->var dataGridOptions = {
		// ...
		onCellPrepared: function(e){
			if (e.rowType == "data")
				switch(e.column.command){
					case "select":
						// Selection column cells
						break;
					case "edit":
						// Editing column cells
						break;
					case "adaptive":
						// Adaptive column cells
						break;	
				}      
		}
	}