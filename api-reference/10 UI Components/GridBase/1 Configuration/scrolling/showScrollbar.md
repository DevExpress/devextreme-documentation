---
id: GridBase.Options.scrolling.showScrollbar
---
---
##### shortDescription
Specifies when the UI component displays scrollbars.

---

The scrollbars help to scroll the content vertically and horizontally. Vertical scrolling is available when all the rows do not fit in the UI component's height. Horizontal scrolling is available when all the columns do not fit in the UI component's width, which can happen when columns have [fixed widths](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width') or the [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth') property is set to **true**.

[note]

When [useNative]({currentpath}/#useNative) is enabled, the following limitations apply to **showScrollbar**:

- *"onScroll"* and *"onHover"* do not hide the scrollbar
- *"never"* disables scrolling

Do not set **showScrollbar** to *"never"* when **useNative** is enabled.

[/note]
