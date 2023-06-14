---
id: dxList.Options.onItemDeleted
type: function(e)
default: null
hidden: false
---
---
##### shortDescription
A function that is executed after a list item is deleted from the data source.

##### param(e): ItemDeletedEvent
Information about the event.

---
Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the UI component or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** property, the UI component entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}

#####See Also#####
- [List - Handle Deletion-Related Events](/concepts/05%20UI%20Components/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/UI_Components/List/Item_Deletion/#Events')