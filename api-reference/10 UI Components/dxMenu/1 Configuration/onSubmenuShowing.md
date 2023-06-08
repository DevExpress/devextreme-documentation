---
id: dxMenu.Options.onSubmenuShowing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a submenu is displayed.

##### param(e): ui/menu:SubmenuShowingEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.rootItem): DxElement
#include common-ref-elementparam with { element: "root menu element" }

---
