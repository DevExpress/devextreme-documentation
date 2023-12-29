---
id: dxList.Options.onItemClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a collection item is clicked or tapped.

##### param(e): ui/list:ItemClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data object.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "clicked item" }

##### field(e.itemIndex): Number | Object
The clicked item's index. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

---
