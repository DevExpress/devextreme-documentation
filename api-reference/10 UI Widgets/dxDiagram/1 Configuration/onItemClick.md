---
id: dxDiagram.Options.onItemClick
type: function(e)
default: null
EventForAction: dxDiagram.itemClick
---
---
##### shortDescription
A function that is executed after a shape or connector is clicked.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.item): dxDiagramItem
A **dxDiagramItem** object descendant ([DiagramShape](/api-reference/50%20Common/Object%20Structures/dxDiagramShape '/Documentation/ApiReference/Common/Object_Structures/dxDiagramShape/') or [DiagramConnector](/api-reference/50%20Common/Object%20Structures/dxDiagramConnector '/Documentation/ApiReference/Common/Object_Structures/dxDiagramConnector/')) related to the event.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
