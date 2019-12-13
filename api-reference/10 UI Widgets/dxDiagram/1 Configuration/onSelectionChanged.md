---
id: dxDiagram.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxDiagram.selectionChanged
---
---
##### shortDescription
A function that is executed after the selection is changed in the Diagram.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.items): Array<dxDiagramItem>
An array of selected items (shapes or connectors).

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
