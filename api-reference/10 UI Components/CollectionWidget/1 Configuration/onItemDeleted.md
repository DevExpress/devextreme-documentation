---
id: CollectionWidget.Options.onItemDeleted
hidden: 
---
---
##### shortDescription
A function that is executed after a collection item is deleted from the data source.

---
Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the UI component or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** property, the UI component entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.