---
uid: common/grids:ScrollingBase.showScrollbar
type: Enums.ScrollbarMode
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the UI component displays scrollbars.

---

Users can scroll {WidgetName} content in the following scenarios:

- **Vertical scrolling**: Rows that do not fit the component [height]({basewidgetpath}/Configuration/#height) scroll vertically. If [paging]({basewidgetpath}/Configuration/paging/) is enabled and **scrolling**.[mode]({basewidgetpath}/Configuration/scrolling/#mode) is *"standard"*, users can scroll within the current page.
- **Horizontal scrolling**: Columns that do not fit the component [width]({basewidgetpath}/Configuration/#width) scroll horizontally. This can happen when you specify fixed [column width]({basewidgetpath}/Configuration/columns/#width) values or enable [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth).

[note]

**showScrollbar** values behave as follows when the UI component uses native scrolling (see [useNative]({currentpath}/#useNative)):

- *"always"*, *"onScroll"*, and *"onHover"*: scrollbar visibility depends on the platform.
- *"never"*: the component hides scrollbars and disables user scrolling.

[/note]
