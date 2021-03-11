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

In *"push"* and *"overlap"* modes, Drawer calculates its height based on the content height. In the *"shrink"* mode, Drawer uses its template's height for the same purpose.

[note]When this property's value changes, the Drawer is rerendered.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/"
}

#include common-ref-enum with {
    enum: "`DrawerOpenedStateMode`",
    values: "`Overlap`, `Shrink`, and `Push`"
}

#####See Also#####
- [revealMode](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/revealMode.md '/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#revealMode')