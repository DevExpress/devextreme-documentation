---
id: dxTreeList.Options.onEditingStart
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
The [configuration](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') of the column whose cell is switching to the editing state. Available in *"cell"* and *"batch"* [editing modes](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode').

##### field(e.component): dxTreeList
The UI component's instance.

##### field(e.data): Object
The data of the row to be edited.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.key): any
The row's key.     
The key of an added but not yet saved row is **undefined**.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
If the **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode') is *"batch"* or *"cell"*, this function is executed while the UI component renders columns of `boolean` [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType') and other columns whose [showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#showEditorAlways') property is **true**.