---
id: CollectionWidget.Options.onItemRendered
type: function(e)
default: null
EventForAction: CollectionWidget.itemRendered
---
---
##### shortDescription
A function that is executed after a collection item is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The current item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The current item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
