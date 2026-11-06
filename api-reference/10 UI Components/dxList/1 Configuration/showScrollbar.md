---
id: dxList.Options.showScrollbar
type: Enums.ScrollbarMode
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the UI component displays the scrollbar.

---

[note]

When [useNativeScrolling]({basewidgetpath}/Configuration/#useNativeScrolling) is enabled, the following limitations apply to **showScrollbar**:

- *"onScroll"* and *"onHover"* do not hide the scrollbar
- *"never"* disables scrolling

Do not set **showScrollbar** to *"never"* when **useNativeScrolling** is enabled.

[/note]

#####See Also#####
- [List - Scrolling - User Interaction](/concepts/05%20UI%20Components/List/20%20Scrolling/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Scrolling/#User_Interaction')