---
default: undefined
type: String
---
---
##### shortDescription
Specifies the field of a data source that provides data for a column.

---
When specifying data for grid columns, you can simply assign an array of data source fields to the **columns** option. This approach is useful when no other options of the **columns** object should be specified. Otherwise, assign an array of objects representing grid columns to the **columns** option and specify the **dataField** option within each object. You can combine these approaches. For example, the following code is acceptable.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
        columns: [
			'CustomerID',
			{ dataField: 'EmployeeID', width: 200 },
			'OrderDate',
			{ dataField: 'Freight', format: 'fixedPoint' },
			'ShipName',
			'ShipCity'
		]
    });

For more detailed information on how to specify grid columns, refer to the [Specifying Grid Columns](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/020%20Specifying%20Grid%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Specifying_Grid_Columns') article.