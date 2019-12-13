---
id: dxDiagram.itemClick
type: eventType
---
---
##### shortDescription
Raised after a shape or connector is clicked.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.item): dxDiagramItem
The item (shape or connector) related to the event.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onItemClick](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#onItemClick')