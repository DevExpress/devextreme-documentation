---
id: dxDiagram.Options.onItemDblClick
type: function(e)
default: null
EventForAction: dxDiagram.itemDblClick
---
---
##### shortDescription
A function that is executed after a shape or connector is double-clicked.

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
