---
default: none
acceptValues: 'single' | 'none'
type: String
---
---
##### shortDescription
Specifies the selection mode supported by the menu.

---
To select an item on click and to visually display the selection, set the [selectByClick](/api-reference/10%20UI%20Widgets/dxMenuBase/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#selectByClick') option to *true*. Note that in this case the **selectionMode** should be *'single'*.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `MenuSelectionMode` enum. This enum accepts the following values: `Single` and `None`.