---
default: 'scrollBottom'
acceptValues: 'scrollBottom' | 'nextButton'
type: String
---
---
##### custom_default_for_android_below_version_4
'nextButton'

##### custom_default_for_desktop
'nextButton'

##### shortDescription
Specifies whether the next page is loaded when a user scrolls the widget to the bottom or when the "next" button is clicked.

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ListPageLoadMode` enum. This enum accepts the following values: `ScrollBottom` and `NextButton`.

#####See Also#####
- [List - Paging](/concepts/05%20Widgets/List/08%20Paging.md '/Documentation/Guide/Widgets/List/Paging/')