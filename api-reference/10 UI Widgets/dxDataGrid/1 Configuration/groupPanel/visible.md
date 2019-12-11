---
default: false
acceptValues: 'auto'
type: Boolean | String
---
---
##### shortDescription
Specifies whether the [group panel](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/090%20Group%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Panel') is visible or not.

---
The group panel is hidden by default. To make it visible, assign *true* to **groupPanel** | **visible** option. Additionally, the group panel includes the *"auto"* mode, in which the visibility of the group panel relies on the device's screen size. On small-screen devices, the group panel will be hidden; on the others - shown.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `Mode` enum that accepts the value `Auto`.