---
##### shortDescription
Searches grid records by a search string.

##### param(text): String
A search string.

---
This method searches grid records by a search string. This string is searched in those grid columns that have the [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option set to *true*. To clear search results, call the **searchByText(text)** method with an empty string as the argument.

Additionally, a user might be able to search records using a [search panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel'). The panel is hidden by default. To make it visible, assign *true* to the **searchPanel** | [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#visible') property.