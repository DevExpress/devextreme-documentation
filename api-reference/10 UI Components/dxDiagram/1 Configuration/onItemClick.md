---
id: dxDiagram.Options.onItemClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a shape or connector is clicked.

##### param(e): ui/diagram:ItemClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.item): dxDiagramItem
A **dxDiagramItem** object descendant (dxDiagramShape or dxDiagramConnector) related to the event.

---
