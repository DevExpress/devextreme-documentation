---
id: dxAccordion.Options.onItemTitleClick
type: function(e) | String
default: null
---
---
##### shortDescription
A function that is executed when an accordion item's title is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxAccordion
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
