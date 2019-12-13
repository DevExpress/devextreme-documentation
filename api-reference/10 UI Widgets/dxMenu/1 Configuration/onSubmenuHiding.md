---
id: dxMenu.Options.onSubmenuHiding
type: function(e)
default: null
EventForAction: dxMenu.submenuHiding
---
---
##### shortDescription
A function that is executed before a submenu is hidden.

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
