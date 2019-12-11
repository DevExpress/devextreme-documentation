---
default: 'dragAndDrop'
acceptValues: 'dragAndDrop' | 'select'
type: String
---
---
##### shortDescription
Specifies how a user manages columns using the column chooser.

---
In drag-and-drop mode, a user moves column headers to and from the column chooser by drag-and-drop. In select mode, the user selects column headers in the column chooser using check boxes. The select mode is designed primarily for touch-enabled devices. On mouse-equipped platforms, either mode is suitable.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridColumnChooserMode` enum. This enum accepts the following values: `DragAndDrop` and `Select`.