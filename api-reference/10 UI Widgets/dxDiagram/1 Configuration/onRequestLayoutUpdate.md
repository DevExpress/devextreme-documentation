---
id: dxDiagram.Options.onRequestLayoutUpdate
type: function(e)
default: null
EventForAction: dxDiagram.requestLayoutUpdate
---
---
##### shortDescription
A function that is executed after diagram data has been changed and the widget rebuilds the diagram. Use this function to specify whether or not the widget should update the diagram layout.

##### param(e): Object
Information about the event.

##### field(e.allowed): Boolean
Specifies whether or not the diagram layout should be updated.

##### field(e.changes): Array<any>
The received changes.

##### field(e.component): {WidgetName}
The widget instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
