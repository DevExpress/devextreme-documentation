---
id: dxCardView.Options.scrolling.showScrollbar
type: Enums.ScrollbarMode
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the UI component displays scrollbars.

---

[note]

When [useNative]({basewidgetpath}/Configuration/#useNative) is enabled, the following limitations apply to **showScrollbar**:

- *"onScroll"* and *"onHover"* do not hide the scrollbar
- *"never"* disables scrolling

Do not set **showScrollbar** to *"never"* when **useNative** is enabled.

[/note]
