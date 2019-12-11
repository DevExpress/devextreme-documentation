---
EventForAction: ..\4 Events\itemReordered.md
hidden: false
default: null
type: function
---
---
##### shortDescription
A handler for the [itemReordered](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemReordered') event.

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
Assign a function to perform a custom action when a list item is moved to another position.