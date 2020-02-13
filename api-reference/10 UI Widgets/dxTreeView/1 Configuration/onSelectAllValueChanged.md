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
#####See Also#####
- [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onSelectionChanged')
- [Select Nodes](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes '/Documentation/Guide/Widgets/TreeView/Select_Nodes/')