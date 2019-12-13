---
id: dxContextMenu.positioning
type: eventType
---
---
##### shortDescription
Raised before the **ContextMenu** is positioned.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.position): positionConfig
The [positioning options](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/').

---
Main article: [onPositioning](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/onPositioning.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onPositioning')

#####See Also#####
#include common-link-handleevents