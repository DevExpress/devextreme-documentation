---
type: eventType
---
---
##### shortDescription
Raised before a cell or row switches to the editing state.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.data): object
Data of a row to be edited.

##### field(e.key): any
The row's key.     
The key of an added but not yet saved row is **undefined**.

##### field(e.cancel): boolean
Allows you to cancel row editing.

##### field(e.column): object
[Configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') of the column whose cell is switching to the editing state. Available in *'cell'* or *'batch'* [editing mode](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode').

---
Main article: [onEditingStart](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditingStart')

#####See Also#####
#include common-link-handleevents