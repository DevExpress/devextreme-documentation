---
id: dxMenu.Options.onSubmenuShowing
type: function(e)
default: null
EventForAction: dxMenu.submenuShowing
---
---
##### shortDescription
A function that is executed before a submenu is displayed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rootItem): dxElement
#include common-ref-elementparam with { element: "root menu element" }

---
