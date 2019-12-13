---
id: dxDropDownButton.itemClick
type: eventType
---
---
##### shortDescription
Raised when an item in the drop-down filed is clicked.

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

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownButton/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#onItemClick')

#####See Also#####
#include common-link-handleevents