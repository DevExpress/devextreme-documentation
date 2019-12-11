---
default: 'info'
acceptValues: 'custom' | 'error' | 'info' | 'success' | 'warning'
type: String
---
---
##### shortDescription
Specifies the **Toast** widget type.

---
The available toast types (except for "custom") only differ by the icon and background color.

If you assign "custom" to the **type** option, the `dx-toast-custom` class is applied to the widget element. Implement the appropriate CSS class to specify toast appearance.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `ToastType` enum. This enum accepts the following values: `Info`, `Warning`, `Error`, `Success` and `Custom`.