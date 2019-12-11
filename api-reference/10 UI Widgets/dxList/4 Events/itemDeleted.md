---
hidden: false
type: eventType
---
---
##### shortDescription
Fires when a widget item is deleted.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the removed item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number | object
Specifies the index of the item being deleted. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemDeleted](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemDeleted.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemDeleted') option to handle the event.

Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#####See Also#####
- [List - Handle Deletion-Related Events](/concepts/05%20Widgets/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Deletion/#Events')
#include common-link-handleevents