---
id: CollectionWidget.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: CollectionWidget.selectionChanged
---
---
##### shortDescription
A function that is executed when a collection item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.addedItems): Array<any>
The data of the items that have been selected.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.removedItems): Array<any>
The data of the items whose selection has been canceled.

---
