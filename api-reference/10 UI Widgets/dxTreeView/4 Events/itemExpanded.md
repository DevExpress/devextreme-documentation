---
type: event
---
---
##### shortDescription
Fires when a tree view item is expanded.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the expanded item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): Number
Specifies the index of the expanded item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.node): object
The expanded item <a href="Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#TreeViewNodes">node</a>.

---
Instead, you can use the [onItemExpanded](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemExpanded') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')