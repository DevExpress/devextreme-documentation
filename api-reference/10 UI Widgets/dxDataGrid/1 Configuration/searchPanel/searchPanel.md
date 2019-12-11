---
type: Object
---
---
##### shortDescription
Specifies options of the search panel.

---
A search panel is a grid element that allows the user to search grid records by a search string. Searching performs in those grid columns that have the [allowFiltering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option set to *true*.

The search panel is located in the upper-right corner of the **DataGrid** widget. To make it visible, set the [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/searchPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#visible') property of the **searchPanel** configuration object to *true*.

#####See Also#####
- [DataGrid - Search Panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/080%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel')
- [DataGrid - Searching](/concepts/05%20Widgets/DataGrid/030%20Filtering/040%20Searching.md '/Documentation/Guide/Widgets/DataGrid/Filtering/#Searching')

Also, you can search grid records by a search string from code. Call the [searchByText(text)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/searchByText(text).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#searchByTexttext') method to do this.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfiltering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>