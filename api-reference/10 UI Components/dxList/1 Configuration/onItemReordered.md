---
id: dxList.Options.onItemReordered
type: function(e)
default: null
hidden: false
---
---
##### shortDescription
A function that is executed after a list item is moved to another position.

##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.fromIndex): Number
The item's previous index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.itemData): Object
The reordered item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index after reordering. This field holds the same value as **toIndex**.      
In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.toIndex): Number
The item's current index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
#####See Also#####
- [itemDragging](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDragging)
- [List - Handle Reordering-Related Events](/concepts/05%20UI%20Components/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/UI_Components/List/Item_Reordering/#Events')