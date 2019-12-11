---
default: 'auto'
acceptValues: 'auto' | 'left' | 'right'
type: String
---
---
##### shortDescription
Specifies the direction at which submenus are displayed.

---
By default, the submenus of the context menu are displayed so that they are visible totally, based on the widget location on the page. Use the **submenuDirection** option to display submenus to the left or to the right from the context menu.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ContextMenuSubmenuDirection` enum. This enum accepts the following values: `Left`, `Right` and `Auto`.