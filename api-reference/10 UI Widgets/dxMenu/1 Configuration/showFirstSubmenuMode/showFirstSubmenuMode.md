---
default: { name: 'onClick', delay: { show: 50, hide: 300 } }
acceptValues: 'onClick' | 'onHover'
type: Object | String
---
---
##### shortDescription
Specifies options for showing and hiding the first level submenu.

---
If you assign a string that specifies the mode name to this option, the widget will use the default delay value.

    <!--JavaScript-->
    showFirstSubmenuMode: "onHover"

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option using the `ShowSubmenuMode` enum. This enum accepts the following values: `OnHover` and `OnClick`.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/jQuery/Light/"
}