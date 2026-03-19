---
id: dxList.Options.onItemSwipe
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a list item is swiped.

##### param(e): ui/list:ItemSwipeEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.direction): String
The item swipe direction.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The swiped item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The swiped item's index. In a grouped list, this property includes group information in the following format: `{ group: 0, item: 0 }`.

---

[note] When **onItemSwipe** is defined, the List component does not allow text selection within items.

#####See Also#####
- [List - Touch-Screen Gestures](/concepts/05%20UI%20Components/List/45%20End-User%20Interaction/01%20Touch-Screen%20Gestures.md '/Documentation/Guide/UI_Components/List/End-User_Interaction/Touch-Screen_Gestures/')