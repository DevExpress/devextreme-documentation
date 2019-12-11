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

[note]

If your *date* values are of the *string* type, make sure they have one of the following formats in order to provide cross-browser compatibility.

 - 'yyyy-MM-dd' (for example, '2017-03-06')
 - 'yyyy-MM-ddTHH:mm:ss' (for example, '2017-03-27T16:54:48')
 - 'yyyy-MM-ddTHH:mm:ssZ' (for example, '2017-03-27T13:55:41Z')
 - 'yyyy-MM-ddTHH:mm:ssx' (for example, '20170327T16:54:10+03')

[/note]
