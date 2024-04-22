---
id: dxMenu.Options.onSubmenuHiding
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before a submenu is hidden.

##### param(e): ui/menu:SubmenuHidingEvent
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel submenu hiding.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.rootItem): DxElement
#include common-ref-elementparam with { element: "root menu element" }

##### field(e.itemData): Object
<!-- Description goes here -->

##### field(e.submenuContainer): DxElement
<!-- Description goes here -->

---
