---
default: 'onScroll'
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
type: String
---
---
##### custom_default_for_android_below_version_4
'onHover'

##### custom_default_for_desktop
'onHover'

##### shortDescription
Specifies when the widget shows the scrollbar.

---
Setting this option makes sense only when the [useNativeScrolling](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/useNativeScrolling.md '{basewidgetpath}/Configuration/#useNativeScrolling') option is set to *false*.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ShowScrollbarMode` enum. This enum accepts the following values: `OnScroll`, `OnHover`, `Always` and `Never`.

#####See Also#####
- [List - Scrolling - User Interaction](/concepts/05%20Widgets/List/20%20Scrolling/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Scrolling/#User_Interaction')