---
default: { name: 'onClick', delay: { show: 50, hide: 300 } }
acceptValues: 'onHover' | 'onClick'
type: Object | String
---
---
##### shortDescription
Specifies options for showing and hiding the first level submenu.

---
If you assign a string that specifies the mode name to this option, the widget will use the default delay value.

    <!--JavaScript-->
    showFirstSubmenuMode: "onHover"

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `ShowSubmenuMode` enum. This enum accepts the following values: `OnHover` and `OnClick`.