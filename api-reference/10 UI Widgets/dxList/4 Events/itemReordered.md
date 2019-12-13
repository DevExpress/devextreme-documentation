---
id: dxList.itemReordered
type: eventType
hidden: false
---
---
##### shortDescription
Raised after a list item is moved to another position.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fromIndex): Number
The item's previous index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.itemData): Object
The reordered item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index after reordering. This field holds the same value as **toIndex**.      
In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.toIndex): Number
The item's current index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Main article: [onItemReordered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemReordered')

#####See Also#####
- [List - Handle Reordering-Related Events](/concepts/05%20Widgets/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Reordering/#Events')
#include common-link-handleevents