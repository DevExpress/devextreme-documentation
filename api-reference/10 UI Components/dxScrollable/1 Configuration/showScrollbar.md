---
id: dxScrollable.Options.showScrollbar
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
type: String
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the UI component displays the scrollbar.

---

[note]

When [useNative]({basewidgetpath}/Configuration/#useNative) is enabled, the following limitations apply to **showScrollbar**:

- *"onScroll"* and *"onHover"* do not hide the scrollbar
- *"never"* disables scrolling

Do not set **showScrollbar** to *"never"* when **useNative** is enabled.

[/note]
