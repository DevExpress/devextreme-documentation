---
id: dxScrollable.Options.showScrollbar
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
type: String
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the widget shows the scrollbar.

---
Setting this option makes sense only when the [useNative](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/useNative.md '{basewidgetpath}/Configuration/#useNative') option is set to **false**.

#include common-ref-enum with {
    enum: "`ShowScrollbarMode`",
    values: "`OnScroll`, `OnHover`, `Always`, and `Never`"
}