---
default: undefined
type: Number
---
---
##### shortDescription
Specifies the index of a column when grid records are [sorted](/concepts/05%20Widgets/DataGrid/020%20Sorting/010%20Sorting.md '/Documentation/Guide/Widgets/DataGrid/Sorting/') by the values of this column.

---
A user can sort grid records by the values of columns. To do it, he or she must click the [header](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/050%20Configuring%20Column%20Headers.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Configuring_Column_Headers') of a required column. But there may be cases, when grid records should be sorted initially. To do this, assign an integer value to the **sortIndex** option of the columns that should be used for sorting grid records. For example, consider the following data source.

	<!--JavaScript-->var dataSource = [
		{ FirstName: 'John', LastName: 'Doe', Title: 'Sales Manager' },
		{ FirstName: 'Michael', LastName: 'King', Title: 'Sales Representative' },
		// ...
	];

To sort these records by the *"LastName"* field first and then by the *"FirstName"* field, use the following code.
	
	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
        columns: [
            { dataField: 'FirstName', sortIndex: 1, sortOrder: 'asc' },
			{ dataField: 'LastName', sortIndex: 0, sortOrder: 'asc' },
            // ...
        ]
    });

Note that the **sortIndex** option should be used along with the [sortOrder](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/sortOrder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder') option as demonstrated in the code above. The **sortOrder** option specifies a sort order for the values of a column.