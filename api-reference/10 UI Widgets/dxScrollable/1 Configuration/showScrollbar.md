---
default: 'onScroll'
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
type: String
---
---
##### custom_default_for_desktop
'onHover'

##### shortDescription
Specifies when the widget shows the scrollbar.

---
Setting this option makes sense only when the [useNative](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/useNative.md '{basewidgetpath}/Configuration/#useNative') option is set to *false*.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ShowScrollbarMode` enum. This enum accepts the following values: `OnScroll`, `OnHover`, `Always` and `Never`.