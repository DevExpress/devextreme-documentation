---
id: dxTreeView.Options.onSelectAllValueChanged
type: function(e)
default: null
EventForAction: dxTreeView.selectAllValueChanged
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') is *"selectAll"* and [selectionMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectionMode') is *"multiple"*.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.value): Boolean
The "Select All" check box's new state.

---
This function is executed under one all the following conditions:

- The [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') option is set to *"selectAll"*;
- The [selectionMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectionMode') is set to *"multiple"*
- One of the following methods is called: [selectItem()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement'), [unselectItem()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectItem(itemElement).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement'), [selectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll'), [unselectAll()](/api-reference/10%20UI%20Widgets/dxTreeView/3%20Methods/unselectAll().md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll').

---
#####See Also#####
- [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectionChanged')
- [Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes/')