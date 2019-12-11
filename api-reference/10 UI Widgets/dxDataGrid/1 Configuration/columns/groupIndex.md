---
default: undefined
type: number
---
---
##### shortDescription
Specifies the index of a column when grid records are [grouped](/concepts/10%20UI%20Widgets/70%20Data%20Grid/040%20Grouping/010%20Grouping.md '/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/') by the values of this column.

---
At runtime, the user can group grid records using the [context menu](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') or the [group panel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/'). But there may be cases when grid records must be grouped initially. To do this, assign an integer value to the **groupIndex** option of those columns that should be used for grouping grid records. For example, consider the following data source.

	<!--JavaScript-->var dataSource = [
		{ FirstName: 'John', LastName: 'Doe', Title: 'Sales Manager' },
		{ FirstName: 'Michael', LastName: 'King', Title: 'Sales Representative' },
		// ...
	];

To group these records first by the *"LastName"* field and then by the *"FirstName"* field, use the following code.
	
	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
        columns: [
            { dataField: 'FirstName', groupIndex: 1 },
			{ dataField: 'LastName', groupIndex: 0 },
            // ...
        ]
    });

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridgroupinglocaldatagrouping/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>