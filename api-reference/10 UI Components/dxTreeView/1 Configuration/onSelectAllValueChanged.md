---
id: dxTreeView.Options.onSelectAllValueChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the "Select All" check box value is changed. Applies only if [showCheckBoxesMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#showCheckBoxesMode') is *"selectAll"* and [selectionMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectionMode') is *"multiple"*.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.value): Boolean | undefined
The "Select All" check box's new state.

---
#####See Also#####
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onSelectionChanged')