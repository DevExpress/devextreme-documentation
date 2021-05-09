---
id: dxDataGrid.Options.onEditingStart
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a cell or row switches to the editing state.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel row editing.

##### field(e.column): Object
The [configuration](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') of the column whose cell is switching to the editing state. Available in the *"cell"* and *"batch"* [editing modes](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode').

##### field(e.component): dxDataGrid
The UI component's instance.

##### field(e.data): Object
The data of a row to be edited.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The row's key. The key of an added but not yet saved row is **undefined**.     
If a field providing keys is not specified in the [data source](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
If the **editing**.[mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode') is *"batch"* or *"cell"*, this function is executed while the UI component renders columns of `boolean` [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType') and other columns whose [showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways') property is **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowEditingAndEditingEvents/"
}