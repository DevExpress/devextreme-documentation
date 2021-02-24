---
id: dxContextMenu.Options.onPositioning
type: function(e)
default: null
EventForAction: dxContextMenu.positioning
---
---
##### shortDescription
A function that is executed before the ContextMenu is positioned.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.position): positionConfig
The [positioning properties](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
