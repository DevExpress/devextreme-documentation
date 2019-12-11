---
default: 'standard'
acceptValues: 'standard' | 'virtual' | 'infinite'
type: String
---
---
##### shortDescription
Specifies the scrolling mode.

---
**DataGrid** provides three modes of scrolling. For a comprehensive overview, refer to the [Vertical Scrolling](/concepts/05%20Widgets/DataGrid/015%20Data%20Navigation/30%20Scrolling/020%20Vertical%20Scrolling.md '/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Scrolling/Vertical_Scrolling') article.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridScrollingMode` enum. This enum accepts the following values: `Standard`, `Virtual` and `Infinite`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/InfiniteScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Infinite Scrolling Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/VirtualScrolling/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Virtual Scrolling Demo</a>