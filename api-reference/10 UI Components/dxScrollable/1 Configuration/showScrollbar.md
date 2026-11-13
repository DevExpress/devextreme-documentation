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

**showScrollbar** values behave as follows when the UI component uses native scrolling (see [useNative](/api-reference/10%20UI%20Components/dxScrollable/1%20Configuration/useNative.md '{currentpath}/#useNative')):

- *"always"*, *"onScroll"*, and *"onHover"*: scrollbar visibility depends on the platform.
- *"never"*: the component hides scrollbars and disables user scrolling.

[/note]
