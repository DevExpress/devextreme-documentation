---
EventForAction: ..\4 Events\itemSwipe.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemSwipe](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemSwipe.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemSwipe') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
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

#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20Widgets/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/')