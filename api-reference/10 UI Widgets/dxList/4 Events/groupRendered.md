---
id: dxList.groupRendered
type: eventType
---
---
##### shortDescription
Raised when a group element is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.groupData): Object
The current group's data.

##### field(e.groupElement): dxElement
#include common-ref-elementparam with { element: "group" }

##### field(e.groupIndex): Number
The group's index.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onGroupRendered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onGroupRendered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onGroupRendered')

#####See Also#####
#include common-link-handleevents