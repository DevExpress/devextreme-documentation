---
id: dxDrawer.Options.openedStateMode
acceptValues: 'overlap' | 'shrink' | 'push'
type: String
default: 'shrink'
---
---
##### shortDescription
Specifies how the drawer interacts with the view in the opened state.

---
The following modes are available:

- *"overlap"*       
The drawer overlaps the view.

- *"shrink"*        
The view's width decreases to accommodate the drawer.

- *"push"*      
The drawer partially displaces the view.

Note that if the value of this property changes, the Drawer [template](/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template) re-renders.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/"
}

#####See Also#####
- [revealMode](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/revealMode.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#revealMode')