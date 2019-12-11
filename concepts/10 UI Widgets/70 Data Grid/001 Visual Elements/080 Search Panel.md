A search panel is a grid element that allows a user to [search](/concepts/10%20UI%20Widgets/70%20Data%20Grid/030%20Filtering/040%20Searching.md '/Documentation/Guide/UI_Widgets/Data_Grid/Filtering/#Searching') records by a search string. The search string is highlighted in the found records. The search panel can be thought of as a [filter row](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row') cell that applies a filter to all grid columns at once.

![DevExtreme DataGrid SearchPanel](/images/DataGrid/SearchPanel.png)

Searching is performed differently in columns with different [data types](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType'). To find a record by a numeric, boolean or date value, a user must enter the full value into the search panel. To find a record by a string value, entering a part of this value is sufficient.

To configure the search panel, use [searchPanel](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/') object fields.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		searchPanel: {
			// Search panel is configured here
		}
    });

By default, the search panel is hidden. To make it visible, set the [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#visible') property of the **searchPanel** object to *true*.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		searchPanel: {
			visible: true
		}
    });

Configurable features of the search panel are listed below. Options that control them must be specified within the **searchPanel** object. 

* **Text Highlighting**		
By default, the search string is highlighted in matched records. To disable this feature, assign *false* to the [highlightSearchText](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/highlightSearchText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#highlightSearchText') property.

* **Appearance**		
The width of the search panel can be adjusted using the [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#width') property. Additionally, you can change the text displayed by an empty search panel. For this purpose, use the [placeholder](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/placeholder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#placeholder') property.