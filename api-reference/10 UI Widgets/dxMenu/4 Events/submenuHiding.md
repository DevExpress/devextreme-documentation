---
id: dxMenu.submenuHiding
type: eventType
---
---
##### shortDescription
Raised before a submenu is hidden.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel submenu hiding.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rootItem): dxElement
#include common-ref-elementparam with { element: "root menu element" }

---
Main article: [onSubmenuHiding](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuHiding.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuHiding')

#####See Also#####
#include common-link-handleevents