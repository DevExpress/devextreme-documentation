---
type: event
---
---
##### shortDescription
Fires when the right mouse button is clicked when the pointer is over a widget item, or when the "sustained" (also known as a long press) touch action is performed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
Specifies the index of the item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Instead, you can use the [onItemContextMenu](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemContextMenu.md '{basewidgetpath}/Configuration/#onItemContextMenu') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')