---
id: dxList.Options.onItemSwipe
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a list item is swiped.

##### param(e): Object
Information about the event.

##### field(e.component): dxList
The UI component's instance.

##### field(e.direction): String
The direction in which the item is swiped.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The swiped item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if Knockout is used.

---
#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20UI%20Components/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/UI_Components/List/End-User_Interaction/Touch-Screen_Gestures/')