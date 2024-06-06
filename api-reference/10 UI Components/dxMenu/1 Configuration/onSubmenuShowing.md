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

##### field(e.rootItem): DxElement
#include common-ref-elementparam with { element: "root menu element" }

##### field(e.itemData): dxMenuItem
Menu item data. Includes root element data and a submenu items' data array.

##### field(e.submenuContainer): DxElement
A root element of a submenu.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Scrolling/"
}