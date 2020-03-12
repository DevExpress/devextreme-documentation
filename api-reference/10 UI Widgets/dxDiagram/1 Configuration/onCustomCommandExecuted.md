---
id: dxDiagram.Options.onCustomCommandExecuted
type: function(e)
EventForAction: dxDiagram.customCommandExecuted
---
---
##### shortDescription
A function that is executed after a custom command item was clicked and allows you to implement the custom command's logic.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget instance's name.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.name): String
The name of the clicked item.

---
