---
EventForAction: ..\4 Events\itemDeleted.md
hidden: 
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemDeleted]({basewidgetpath}/Events/#itemDeleted) event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the [widget's instance]({basewidgetpath}/Methods/#instance).

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the removed item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the index of the item being deleted.

---
Assign a function to perform a custom action when a collection item is deleted.

Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.