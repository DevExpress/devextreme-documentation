---
default: 'auto'
acceptValues: 'auto' | 'leftOrTop' | 'rightOrBottom'
type: String
---
---
##### shortDescription
Specifies the direction at which the submenus are displayed.

---
By default, the first submenu is displayed so that it is visible totally, based on the menu location on the page. Use the **submenuDirection** option to display the first submenu at the bottom or at the top of a root item when the widget's [orientation](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#orientation') is horizontal, and to the left or to the right when orientation is vertical.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `SubmenuDirection` enum. This enum accepts the following values: `LeftOrTop`, `RightOrBottom` and `Auto`.