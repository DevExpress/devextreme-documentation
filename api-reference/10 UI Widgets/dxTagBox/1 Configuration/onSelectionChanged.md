---
id: dxTagBox.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxTagBox.selectionChanged
---
---
##### shortDescription
A function that is executed when a list item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.addedItems): Array<String, Number, Object>
The data of the items that have been selected.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.removedItems): Array<String, Number, Object>
The data of the items whose selection has been canceled.

---
