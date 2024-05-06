---
id: dxMenu.Options.onSubmenuHidden
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a submenu is hidden.

##### param(e): ui/menu:SubmenuHiddenEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.rootItem): DxElement
#include common-ref-elementparam with { element: "root menu element" }

##### field(e.itemData): dxMenuItem
Menu item data. Includes root element data and a submenu items' data array.

##### field(e.submenuContainer): DxElement
A root element of a submenu.

---
