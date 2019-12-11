---
hidden: false
type: eventType
---
---
##### shortDescription
Fires when a widget item is deleted.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.itemData): object
The removed item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number | object
The removed item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Instead, you can use the [onItemDeleted](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemDeleted.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemDeleted') option to handle the event.

Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#####See Also#####
- [List - Handle Deletion-Related Events](/concepts/05%20Widgets/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Deletion/#Events')
#include common-link-handleevents