---
id: CollectionWidget.selectionChanged
type: eventType
---
---
##### shortDescription
Raised when a collection item is selected or selection is canceled.

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
Main article: [onSelectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')

#####See Also#####
#include common-link-handleevents