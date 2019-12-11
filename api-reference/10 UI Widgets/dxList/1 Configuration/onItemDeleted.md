---
EventForAction: ..\4 Events\itemDeleted.md
hidden: false
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [itemDeleted](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemDeleted.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemDeleted') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.itemData): Object
The removed item's data.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): Number|Object
The removed item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Assign a function to perform a custom action when a list item is deleted.

Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#####See Also#####
- [List - Handle Deletion-Related Events](/concepts/05%20Widgets/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Deletion/#Events')