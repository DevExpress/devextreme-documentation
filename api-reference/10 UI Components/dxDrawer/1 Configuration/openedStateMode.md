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
The drawer overlaps the view. If you assign *"overlap"* to the **openedStateMode** property, the Drawer uses the [Popup](/Documentation/ApiReference/UI_Components/dxPopup/) component to render a side menu. A z-index of all overlay UI components (Popup, Popover, etc.) on a page is calculated when a component is created and it takes into account the z-indexes of existing overlays. As a result, a newly opened Popup (the Drawer's panel) is displayed at the top. If you need to display a different window at the top, call the [focus()](/Documentation/ApiReference/UI_Components/dxPopup/Methods/#focus) method for the Popup after the **openedStateMode** property is changed.

- *"shrink"*        
The view's width decreases to accommodate the drawer.

- *"push"*      
The drawer partially displaces the view.

Note that if the value of this property changes, the Drawer [template](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/template.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template') is re-rendered.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/"
}

#####See Also#####
- [revealMode](/api-reference/10%20UI%20Components/dxDrawer/1%20Configuration/revealMode.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#revealMode')