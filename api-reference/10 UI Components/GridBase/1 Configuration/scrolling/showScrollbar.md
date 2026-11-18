---
id: GridBase.Options.scrolling.showScrollbar
---
---
##### shortDescription
Specifies when the UI component displays scrollbars.

---

Users can scroll {WidgetName} content in the following scenarios:

- **Vertical scrolling**: Rows that do not fit the component [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '{basewidgetpath}/Configuration/#height') scroll vertically. If [paging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging '{basewidgetpath}/Configuration/paging/') is enabled and **scrolling**.[mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') is *"standard"*, users can scroll within the current page.
- **Horizontal scrolling**: Columns that do not fit the component [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width') scroll horizontally. This can happen when you specify fixed [column width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width') values or enable [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth').

[note]

**showScrollbar** values behave as follows when the UI component uses native scrolling (see [useNative](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/scrolling/useNative.md '{currentpath}/#useNative')):

- *"always"*, *"onScroll"*, and *"onHover"*: scrollbar visibility depends on the platform.
- *"never"*: the component hides scrollbars and disables user scrolling.

[/note]
