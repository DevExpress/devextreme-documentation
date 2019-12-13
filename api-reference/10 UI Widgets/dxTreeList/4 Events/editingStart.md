---
id: dxTreeList.editingStart
type: eventType
---
---
##### shortDescription
Raised before a cell or row switches to the editing state.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel row editing.

##### field(e.column): Object
The [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') of the column whose cell is switching to the editing state. Available in *"cell"* or *"batch"* [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode').

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to be edited.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The row's key.     
The key of an added but not yet saved row is **undefined**.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onEditingStart](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditingStart')

#####See Also#####
#include common-link-handleevents