---
hidden: false
type: eventType
---
---
##### shortDescription
Fires when a list item is moved to another position.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.itemData): object
The reordered item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number | object
The item's index after reordering. This field holds the same value as **toIndex**.      
In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.fromIndex): number
The item's previous index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.toIndex): number
The item's current index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemReordered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemReordered') option to handle the event.

To enable item reordering, set the [allowItemReordering](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemReordering.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering') option to **true**.

[note]If a user drags an item and drops it at the same location, the event does not fire.

#####See Also#####
- [List - Handle Reordering-Related Events](/concepts/05%20Widgets/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Reordering/#Events')
#include common-link-handleevents