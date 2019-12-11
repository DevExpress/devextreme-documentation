One of the filtering capabilities that the **DataGrid** provides for end users is a [filter row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row'). To filter records by a column, an end-user must type a value or a part of it (depends on the data type) in a corresponding filter row cell. If any records are found, then the grid will contain only them. Otherwise, it displays the "No Data" message.

![DevExtreme DataGrid FilterRow](/images/DataGrid/FilterRow.png)

[note] Filtering is performed ignoring the letter case.

Usually, a filter row cell is a text box. But in some cases, a filter row cell is represented by a control more suitable for filtering in the particular column. For example, when the [dataType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') option of a column is *'date'*, its filter row cell contains a calendar that allows a user to choose a date. Another example is a select box that appears in a filter row cell if the column's **dataType** is *'boolean'*, or if a [lookup](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/') column is used. 

Different filter operations may be applied to a column. To change the current filter operation, the user must choose a required item from a filtering menu. This menu is invoked when the user hovers the mouse pointer over the magnifying glass icon of a filter row cell. Operations available using this menu depend on the data type of a column and vary from type to type, as well as the default filter operation. After a filter operation is applied, the default operation can be restored by choosing the "Reset" item in the filtering menu. The following table represents filter operations by data types.

<div class="simple-table">
	<table>
	  <thead>
	  <tr>
		<th>dataType</th>
		<th>Available filter operations</th>
		<th>Default filter operation</th>
	  </tr>
	  </thead>
	  <tbody>
	  <tr>
		<td>'string'</td>
		<td>'contains' | 'notcontains' | 'startswith' | 'endswith' | '=' | '<>'</td>
		<td>'contains'</td>
	  </tr>
	  <tr>
		<td>'number'</td>
		<td>'=' | '<>' | '<' | '>' | '<=' | '>=' | 'between'</td>
		<td>'='</td>
	  </tr>
	  <tr>
		<td>'date'</td>
		<td>'=' | '<>' | '<' | '>' | '<=' | '>=' | 'between'</td>
		<td>'='</td>
	  </tr>
	  </tbody>
	</table>
</div>

To make a filter row available for end users, set the **filterRow** | [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#visible') option to *true*.

#####See Also#####
- [DataGrid - Filter Row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row')

If the filter row is visible, filtering is enabled for all grid columns. However, you can disable it for individual columns by setting their [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option to *false*.

	<!--JavaScript-->var gridOptions = {
		// ...
		filterRow: { visible: true },
		columns: [{
			allowFiltering: false,
			// ...
		}, //...
		]
    };

The set of filter operations appearing in the filtering menu may be corrected. For this purpose, assign an array of required operations to the [filterOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations') option of a column. To apply one of these operations initially, specify the [selectedFilterOperation](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/selectedFilterOperation.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#selectedFilterOperation') option of the same column.

	<!--JavaScript-->var gridOptions = {
		// ...
		columns: [{
			filterOperations: [ 'contains', 'startswith', '=' ],
			selectedFilterOperation: 'contains',
			// ...
		}, //...
		]
    };

There may be cases when a user must be able to apply a filter, but not to change the filter operation. In these cases, assign an empty array to the **filterOperations** option and specify the current filter operation using the **selectedFilterOperation** option.

	<!--JavaScript-->var gridOptions = {
		// ...
		columns: [{
			filterOperations: [],
			selectedFilterOperation: 'contains',
			// ...
		}, //...
		]
    };

If a filter must be applied to a column initially, set the [filterValue](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/filterValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValue') option of this column. This value is applied using a filter operation specified by the [selectedFilterOperation](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/selectedFilterOperation.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#selectedFilterOperation') option. Note that the [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option of this column must be *true*. The following code leaves only those records, whose value in the *"Data"* column equals 10.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [{
			dataField: 'Data',
			selectedFilterOperation: '=',
			filterValue: 10
			// ...
		}, //...
		]
    });

To make set filtering impossible for a user to change, hide the filter row by setting the **filterRow** | [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#visible') option to *false*.