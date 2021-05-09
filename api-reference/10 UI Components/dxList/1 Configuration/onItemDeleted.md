---
id: dxList.Options.onItemDeleted
type: function(e)
default: null
hidden: false
---
---
##### shortDescription
A function that is executed after a list item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): Object
The removed item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The removed item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the UI component or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** property, the UI component entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#####See Also#####
- [List - Handle Deletion-Related Events](/concepts/05%20UI%20Components/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/UI_Components/List/Item_Deletion/#Events')