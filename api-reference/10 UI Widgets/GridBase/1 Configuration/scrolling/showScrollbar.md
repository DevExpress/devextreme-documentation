---
id: GridBase.Options.scrolling.showScrollbar
acceptValues: 'always' | 'never' | 'onHover' | 'onScroll'
type: String
default: 'onScroll'
---
---
##### shortDescription
Specifies when to show scrollbars. Applies only if [useNative](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/scrolling/useNative.md '{basewidgetpath}/Configuration/scrolling/#useNative') is **false**.

---
The scrollbars help to scroll the content vertically and horizontally. Vertical scrolling is available when all the rows do not fit in the widget's height. Horizontal scrolling is available when all the columns do not fit in the widget's width, which can happen when columns have [fixed widths](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width') or the [columnAutoWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth') option is set to **true**.

#include common-ref-enum with {
    enum: "`ShowScrollbarMode`",
    values: "`OnScroll`, `OnHover`, `Always`, and `Never`"
}