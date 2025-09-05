---
id: dxContextMenu.Options.target
type: String | UserDefinedElement | undefined
default: undefined
---
---
##### shortDescription
The target element associated with the context menu.

---
#include uiwidgets-ref-target

To align the {WidgetName} against this element, use the [position](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/position.md '{basewidgetpath}/Configuration/#position') property.

When **target** is `undefined` and [showEvent](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/showEvent '{basewidgetpath}/Configuration/showEvent') is related to mouse/touch inputs (the default [dxcontextmenu](/api-reference/10%20UI%20Components/UI%20Events/dxcontextmenu.md 'Documentation/ApiReference/UI_Components/UI_Events/#dxcontextmenu') event), the component is displayed at the mouse cursor/touch location. If the [showEvent](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/showEvent '{basewidgetpath}/Configuration/showEvent') value is not related to mouse/touch events, the component is displayed in the top-left corner of the page.