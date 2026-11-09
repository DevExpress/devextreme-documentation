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

**showScrollbar** values behave as follows when the UI component uses native scrolling (see [useNative]({currentpath}/#useNative)):

- *"always"*, *"onScroll"*, and *"onHover"*: Scrollbar visibility depends on the platform.
- *"never"*: The component hides scrollbars and disables user scrolling.

[/note]
