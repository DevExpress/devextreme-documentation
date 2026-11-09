---
id: GridBase.Options.scrolling.showScrollbar
---
---
##### shortDescription
Specifies when the UI component displays scrollbars.

---

Scrollbars help to scroll content vertically and horizontally. Vertical scrolling is available when no rows fit in the UI component's height. Horizontal scrolling is available when all no columns fit in the UI component's width, which can happen when columns have [fixed widths](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width') or the [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth') property is set to **true**.

[note]

**showScrollbar** values behave as follows when the UI component uses native scrolling (see [useNative]({currentpath}/#useNative)):

- *"always"*, *"onScroll"*, and *"onHover"*: Scrollbar visibility depends on the platform.
- *"never"*: The component hides scrollbars and disables user scrolling.

[/note]
