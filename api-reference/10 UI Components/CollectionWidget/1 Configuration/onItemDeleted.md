---
id: CollectionWidget.Options.onItemDeleted
type: function(e)
default: null
hidden: 
---
---
##### shortDescription
A function that is executed after a collection item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): Object
The removed item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The removed item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the UI component or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** property, the UI component entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.