---
id: dxAccordion.itemTitleClick
type: eventType
---
---
##### shortDescription
Raised when an accordion item's title is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onItemTitleClick](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/onItemTitleClick.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#onItemTitleClick')

#####See Also#####
#include common-link-handleevents