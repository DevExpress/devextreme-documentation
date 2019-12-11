A very important property of a grid column is the type of data this column contains. By default, the type of a column is determined automatically depending on the type of values that are in the data source field of this column. However, in many cases, these values must be converted into another type, e.g., when you receive numbers in a string format. If you need to convert these values, set the data type of a column explicitly using its [dataType](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') property.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		columns: [{
				dataField: 'CustomerID',
				dataType: 'number'
			}, {
				dataField: 'OrderDate',
				dataType: 'date'
			},
			// ...
		]
    });

[note] If your *date* values are of a *string* type, make sure they have one of the following formats in order to provide cross-browser compatibility.

- 'yyyy/MM/dd' (i.e., '2014/08/25')		
- 'yyyy/MM/dd HH:mm:ss' (i.e., '2014/08/25 16:35:10')