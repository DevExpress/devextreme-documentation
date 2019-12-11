---
EventForAction: ..\4 Events\itemSwipe.md
default: null
type: function
---
---
##### shortDescription
A handler for the [itemSwipe](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemSwipe.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemSwipe') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.itemData): object
The data that is bound to the swiped item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
The index of the swiped items. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.direction): string
Specifies whether the swipe operation is performed in the left or right direction.

---
Assign a function to perform a custom action when an item is swiped.