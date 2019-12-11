---
hidden: 
type: eventType
---
---
##### shortDescription
Fires when a collection item is deleted.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the [widget's instance]({basewidgetpath}/Methods/#instance).

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the removed item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the index of the item being deleted.

---
Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

Instead, you can use the [onItemDeleted]({basewidgetpath}/Configuration/#onItemDeleted) option to handle the event.

#####See Also#####
#include common-link-handleevents