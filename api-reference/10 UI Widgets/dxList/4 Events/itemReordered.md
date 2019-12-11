---
hidden: false
type: eventType
---
---
##### shortDescription
Fires when a list item is moved to another position.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the reordered item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the current index of the item after reordering. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }. This field holds the same value as **toIndex**.

##### field(e.fromIndex): number
Specifies the previous index of the item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.toIndex): number
Specifies the current index of the item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemReordered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemReordered') option to handle the event.

To enable item reordering, set the [allowItemReordering](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemReordering.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering') option to **true**.

[note]If a user drags an item and drops it at the same location, the event does not fire.

#####See Also#####
- [List - Handle Reordering-Related Events](/concepts/05%20Widgets/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Reordering/#Events')
#include common-link-handleevents