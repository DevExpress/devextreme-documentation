---
id: dxTabPanel.titleHold
type: eventType
---
---
##### shortDescription
Raised when a tab has been held for a [specified period](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemHoldTimeout').

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The data of the item whose title is held.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onTitleHold](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/onTitleHold.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleHold')

#####See Also#####
#include common-link-handleevents