---
id: dxContextMenu.Options.onPositioning
type: function(e)
default: null
EventForAction: dxContextMenu.positioning
---
---
##### shortDescription
A function that is executed before the **ContextMenu** is positioned.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.position): positionConfig
The [positioning options](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
