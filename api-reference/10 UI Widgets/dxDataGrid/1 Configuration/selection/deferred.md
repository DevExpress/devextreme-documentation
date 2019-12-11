---
default: false
type: Boolean
---
---
##### shortDescription
Makes selection deferred.

---
Consider making selection deferred if the widget needs to operate a large volume of data and the user is allowed to [select all rows at once](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll'). Unlike usual (or "instant") selection, in the case of deferred selection, the widget requests data only when you demand this using the API, for example, when the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') or [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') method is called. This mode has certain specifics that determine the API you need to use. For more information, see the [Deferred Selection](/concepts/05%20Widgets/DataGrid/013%20Features%20for%20Remote%20Data/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/') article.

[note]Deferred selection is unsupported when [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode') is *'page'*.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>