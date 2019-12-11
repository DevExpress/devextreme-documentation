The **DataGrid** widget allows you to anchor columns to the left or right grid edge. When anchored, columns are not horizontally scrolled with the grid. Use this feature if you need a column (or columns) to always be displayed, regardless of [scrolling](/concepts/10%20UI%20Widgets/70%20Data%20Grid/015%20Data%20Navigation/30%20Scrolling/030%20Horizontal%20Scrolling.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Scrolling/Horizontal_Scrolling').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridcolumnscolumncustomization" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

To anchor columns to grid edges, set the grid's [columnFixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') | **enabled** option to *true*. In this instance, column fixing-related commands will be available in the column headers' context menu. Using these commands, end users can anchor any column to the left or to the right grid edge and then unfix it.

	<!--JavaScript-->var dataGridOptions = {
		//...
		columnFixing: { 
			enabled: true
		}
	};

![DevExtreme DataGrid Column Fixing](/images/DataGrid/dxDataGrid_ColumnFixing_ContextMenu.png)

You can prevent the fixing of a particular column by setting its [allowFixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFixing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFixing') option to *false*. In this instance, the fixing-related commands will not be available in the column's context menu.

Columns can be fixed at runtime and at design time. If you require certain columns to appear fixed initially, set the columns' [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') option to *true*. In this instance, the grid's [columnFixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') | **enabled** option will automatically be set to *true*. 

	<!--JavaScript-->var dataGridOptions = {
		//...
		columns: [{
			// ...
			fixed: true
		}, {
			//...
		}]
	}

![DevExtreme DataGrid Column Fixing](/images/DataGrid/FixedColumns.gif)

Note that the command columns, the ones containing check boxes to select rows or links to save/delete rows, are fixed when you enable column fixing, since the **fixed** option is set to *true* for these columns internally. 

Anchoring columns makes sense only when the [auto width feature](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth') is disabled and the total [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') of columns exceeds the grid container's width. Otherwise, horizontal scrolling does not occur and fixed columns end up behaving like other columns.
