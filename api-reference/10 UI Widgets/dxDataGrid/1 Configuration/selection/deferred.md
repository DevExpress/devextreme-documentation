---
id: dxDataGrid.Options.selection.deferred
type: Boolean
default: false
---
---
##### shortDescription
Makes selection deferred.

---
Consider making selection deferred if the widget needs to operate a large volume of data and the user is allowed to [select all rows at once](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll'). Unlike usual (or "instant") selection, in the case of deferred selection, the widget requests data only when you demand this using the API, for example, when the [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') or [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') method is called. This mode has certain specifics that determine the API you need to use. For more information, see the [Deferred Selection](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/015%20Deferred%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection') article.

[note]Deferred selection is unsupported when [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode') is *"page"*.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/"
}