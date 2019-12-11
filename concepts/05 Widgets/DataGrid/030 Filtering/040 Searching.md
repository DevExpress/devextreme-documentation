Filtering can be performed in one or several columns at a time. In addition, **DataGrid** provides you with the capability to filter records by all columns at once. In **DataGrid**, searching is performed using a search panel. To search through records, a user must type in text in the search panel. Records that match this text are displayed in a grid.

![DevExtreme DataGrid SearchPanel](/images/DataGrid/SearchPanel.png)

Searching is conducted differently in columns with different data types. To find a record by a numeric, boolean or date value, a user must enter the full value into the search panel. To find a record by a string value, entering a part of this value is sufficient.

The search panel is available for end users when the [searchPanel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/') | **visible** option is set to *true*.

#####See Also#####
- [DataGrid - Search Panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel')

Although by default searching is performed in all columns, you can disable it in certain columns. For this purpose, set the [allowSearch](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowSearch.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSearch') option to *false*.

	<!--JavaScript-->var gridOptions = {
		// ...
		searchPanel: { visible: true },
		columns: [{
			allowSearch: false,
			// ...
		}, //...
		]
    };

You can also specify an initial search string using the **searchPanel** | [text](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/text.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#text') option.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		searchPanel: {
			text: 'Search string'
		}
    });

Searching can also be conducted in code using the [searchByText(text)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/searchByText(text).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#searchByTexttext') method. To clear search settings, call the same method with an empty string as the argument.

To try searching in action, open the example below and type in text in the search panel.