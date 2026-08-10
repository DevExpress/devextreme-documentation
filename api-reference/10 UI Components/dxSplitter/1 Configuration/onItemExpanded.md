---
id: dxSplitter.Options.onItemExpanded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an item (pane) is expanded.

##### param(e): ui/splitter:ItemExpandedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
The UI component's container.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The expanded item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The expanded item's index.

---
<!-- Description goes here -->