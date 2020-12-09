---
id: dxList.Options.onItemContextMenu
type: function(e)
default: null
---
---
##### param(e): Object
Information about the event.

##### field(e.component): dxList
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The target item's data object.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "target item" }

##### field(e.itemIndex): Number | Object
The target item's index. In a grouped list, the index is specified as an object defining group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### return: any
<!-- Description goes here -->

---
