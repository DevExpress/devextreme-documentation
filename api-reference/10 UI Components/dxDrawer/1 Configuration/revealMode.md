---
id: dxDrawer.Options.revealMode
acceptValues: 'slide' | 'expand'
type: String
default: 'slide'
---
---
##### shortDescription
Specifies the drawer's reveal mode.

---
The following modes are available:

* *"slide"*     
The drawer slides in. The drawer and its content are animated.

* *"expand"*    
The drawer expands from the closed position. The drawer's width is animated; its content is not.

When you change the Drawer's reveal mode, the component needs to perform recalculations for animation. As a result, the [template](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/template.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template') is rerendered which can increase loading time.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/"
}

#####See Also#####
- [openedStateMode](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/openedStateMode.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#openedStateMode')