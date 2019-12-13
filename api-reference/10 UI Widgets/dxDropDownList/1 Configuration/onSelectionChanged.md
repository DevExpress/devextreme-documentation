---
id: dxDropDownList.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxDropDownList.selectionChanged
---
---
##### shortDescription
A function that is executed when a list item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.selectedItem): Object
The selected item's data.

---
