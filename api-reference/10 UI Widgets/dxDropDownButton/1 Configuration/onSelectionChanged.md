---
id: dxDropDownButton.Options.onSelectionChanged
type: function(e) | String
default: null
EventForAction: dxDropDownButton.selectionChanged
---
---
##### shortDescription
A function that is executed when an item is selected or selection is canceled. In effect when [useSelectMode](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/useSelectMode.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#useSelectMode') is **true**.

##### param(e): Object
Information about the event that caused the function to execute.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.item): Object
The selected item's data.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.previousItem): Object
The previously selected item's data.

---
