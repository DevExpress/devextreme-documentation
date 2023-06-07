---
id: dxList.Options.onItemHold
type: function(e)
default: null
---
---
##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The data object of the item being held.

##### field(e.itemElement): DxElement
The container of the item being held. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### field(e.itemIndex): Number | Object
The index of the item being held. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
