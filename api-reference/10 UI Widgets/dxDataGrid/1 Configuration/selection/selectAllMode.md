---
default: 'allPages'
acceptValues: 'page' | 'allPages'
type: String
---
---
##### shortDescription
Specifies the mode in which all the records are selected. Applies only if **selection** | [allowSelectAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') is *true*.

---
This option specifies how records should be selected on clicking the ["Select All" check box](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/110%20Selection%20Column.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column') and by calling the [selectAll()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll')/[deselectAll()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll') methods. The following modes are available.

- *'page'*  
 Selects records on currently rendered pages.       

 [note]This mode is incompatible with [deferred selection](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred').

- *'allPages'*  
 Selects records on all pages.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `SelectAllMode` enum. This enum accepts the following values: `Page` and `AllPages`.

<a href=" https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-selection-multiple_record_selection_modes" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>