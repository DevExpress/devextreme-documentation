---
EventForAction: ..\4 Events\editingStart.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **editingStart** event. Executed before a cell or row switches to the editing state.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.data): Object
The data of the row to be edited.

##### field(e.key): any
The row's key.     
The key of an added but not yet saved row is **undefined**.

##### field(e.cancel): Boolean
Allows you to cancel row editing.

##### field(e.column): Object
The [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') of the column whose cell is switching to the editing state. Available in *'cell'* or *'batch'* [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode').

---
In cell or batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode'), this handler is executed while rendering cells of columns whose [showEditorAlways](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/showEditorAlways.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#showEditorAlways') option is set to **true**.