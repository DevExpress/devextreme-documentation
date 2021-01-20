---
id: dxScrollable.Options.showScrollbar
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
type: String
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the UI component shows the scrollbar.

---
Setting this property makes sense only when the [useNative](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/useNative.md '{basewidgetpath}/Configuration/#useNative') property is set to **false**.

#include common-ref-enum with {
    enum: "`ShowScrollbarMode`",
    values: "`OnScroll`, `OnHover`, `Always`, and `Never`"
}