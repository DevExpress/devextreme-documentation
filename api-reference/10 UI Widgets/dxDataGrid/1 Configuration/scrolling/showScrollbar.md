---
default: 'onScroll'
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
type: String
---
---
##### shortDescription
Specifies the scrollbar display policy. Applies only if [useNative](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling/useNative.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#useNative') is **false**.

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ShowScrollbarMode` enum. This enum accepts the following values: `OnScroll`, `OnHover`, `Always` and `Never`.