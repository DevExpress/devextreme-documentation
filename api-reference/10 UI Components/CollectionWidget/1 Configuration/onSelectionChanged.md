---
id: CollectionWidget.Options.onSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a collection item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.addedItems): Array<any>
The data of the items that have been selected.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.removedItems): Array<any>
The data of the items whose selection has been canceled.

---
