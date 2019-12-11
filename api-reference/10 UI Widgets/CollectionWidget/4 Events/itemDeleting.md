---
hidden: 
type: event
---
---
##### shortDescription
Fires before a collection item is deleted.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item to be deleted.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the index of the item being deleted.

##### return: Promise
A Promise of the jQuery Deferred object resolved if the item deletion is confirmed and rejected if deletion is canceled.

---
Instead, you can use the [onItemDeleting](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemDeleting.md '{basewidgetpath}/Configuration/#onItemDeleting') option to handle the event.

Note that the **itemDeleting** event is raised only if an item is being deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')