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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/"
}

#include common-ref-enum with {
    enum: "`DrawerRevealMode`",
    values: "`Slide` and `Expand`"
}

#####See Also#####
- [openedStateMode](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/openedStateMode.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#openedStateMode')