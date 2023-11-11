---
id: dxAutocomplete.Options.onItemClick
type: function(e)
---
---
##### shortDescription
A function that is executed when a list item is clicked or tapped.

##### param(e): ui/autocomplete:ItemClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): DxElement
The item's container.

##### field(e.itemIndex): Number
The clicked item's index. If the UI component items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
<!-- Description goes here -->