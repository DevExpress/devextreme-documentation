---
id: dxSplitter.Options.onItemCollapsed
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an item (pane) is collapsed.

##### param(e): ui/splitter:ItemCollapsedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
The UI component's container.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The collapsed item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The collapsed item's index.

---
<!-- Description goes here -->