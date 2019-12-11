---
##### shortDescription
Expands an adaptive detail row by the key of its parent data row.

##### param(key): any
The key of a data row.

---
[note]To access a data row by its key, a field providing key values must be specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key.

#####See Also#####
- [isAdaptiveDetailRowExpanded(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/isAdaptiveDetailRowExpanded(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isAdaptiveDetailRowExpandedkey') - checks whether a specific adaptive detail row is expanded or collapsed.
- [collapseAdaptiveDetailRow()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/collapseAdaptiveDetailRow().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAdaptiveDetailRow') - collapses the currently expanded adaptive detail row.
- [adaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/adaptiveDetailRowPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#adaptiveDetailRowPreparing') - an event that fires before an adaptive detail row will be rendered.
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled') - enables column hiding in the UI.