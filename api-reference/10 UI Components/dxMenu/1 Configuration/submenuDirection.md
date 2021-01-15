---
id: dxMenu.Options.submenuDirection
acceptValues: 'auto' | 'leftOrTop' | 'rightOrBottom'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies the direction at which the submenus are displayed.

---
By default, the first submenu is displayed so that it is visible totally, based on the menu location on the page. Use the **submenuDirection** property to display the first submenu at the bottom or at the top of a root item when the UI component's [orientation](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#orientation') is horizontal, and to the left or to the right when orientation is vertical.

#include common-ref-enum with {
    enum: "`SubmenuDirection`",
    values: "`LeftOrTop`, `RightOrBottom`, and `Auto`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/"
}