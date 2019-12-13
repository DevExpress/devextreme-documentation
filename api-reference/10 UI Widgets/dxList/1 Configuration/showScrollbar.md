---
id: dxList.Options.showScrollbar
acceptValues: 'always' | 'never' | 'onHover' | 'onScroll'
type: String
default: 'onScroll', 'onHover' (desktop)
---
---
##### shortDescription
Specifies when the widget shows the scrollbar.

---
Setting this option makes sense only when the [useNativeScrolling](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/useNativeScrolling.md '{basewidgetpath}/Configuration/#useNativeScrolling') option is set to **false**.

#include common-ref-enum with {
    enum: "`ShowScrollbarMode`",
    values: "`OnScroll`, `OnHover`, `Always`, and `Never`"
}

#####See Also#####
- [List - Scrolling - User Interaction](/concepts/05%20Widgets/List/20%20Scrolling/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Scrolling/#User_Interaction')