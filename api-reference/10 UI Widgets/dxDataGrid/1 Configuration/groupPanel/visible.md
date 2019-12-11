---
default: false
acceptValues: 'auto'
type: Boolean | String
---
---
##### shortDescription
Specifies whether the [group panel](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/10%20Group%20Data.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Group_Data') is visible or not.

---
The group panel is hidden by default. To make it visible, assign **true** to **groupPanel**.**visible** option. Additionally, the group panel includes the *"auto"* mode, in which the visibility of the group panel relies on the device's screen size. On small-screen devices, the group panel will be hidden; on the others - shown.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option using the `Mode` enum that accepts the value `Auto`.