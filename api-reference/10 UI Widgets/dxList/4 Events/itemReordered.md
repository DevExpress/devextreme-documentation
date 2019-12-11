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
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the reordered item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the current index of the item after reordering. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }. This field holds the same value as <b>toIndex</b>.

##### field(e.fromIndex): number
Specifies the previous index of the item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.toIndex): number
Specifies the current index of the item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemReordered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemReordered') option to handle the event.

To enable item reordering, set the [allowItemReordering](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemReordering.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering') option to *true*.

[note]If a user drags an item and drops it at the same location, the event does not fire.

#####See Also#####
- [List - Handle Reordering-Related Events](/concepts/05%20Widgets/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Reordering/#Events')
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')