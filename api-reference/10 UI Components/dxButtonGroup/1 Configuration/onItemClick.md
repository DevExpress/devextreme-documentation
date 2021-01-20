---
id: dxButtonGroup.Options.onItemClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a button is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
The UI component's container.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked button's [data](/api-reference/10%20UI%20Widgets/dxButtonGroup/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxButtonGroup/Configuration/items/').

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "button" }

##### field(e.itemIndex): Number
The clicked button's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
