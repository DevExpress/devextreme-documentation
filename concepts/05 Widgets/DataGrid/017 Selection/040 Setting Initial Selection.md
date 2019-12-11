Rows can be selected not only at runtime, but also at design time. If you require certain rows to appear selected, declare an array of their keys and assign it to the [selectedRowKeys](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys') option.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		selectedRowKeys: [1, 5, 8]
    });

Note that the specified selection mode does not affect the initial selection. Thus, you can specify multiple rows to be selected initially even if the selection mode is single.

#####See Also#####
- [Deferred Selection - Setting Initial Selection](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/')