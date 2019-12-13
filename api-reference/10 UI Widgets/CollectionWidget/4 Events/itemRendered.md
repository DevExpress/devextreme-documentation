---
id: CollectionWidget.itemRendered
type: eventType
---
---
##### shortDescription
Raised after a collection item is rendered.

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
Main article: [onItemRendered](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemRendered.md '{basewidgetpath}/Configuration/#onItemRendered')

#####See Also#####
#include common-link-handleevents