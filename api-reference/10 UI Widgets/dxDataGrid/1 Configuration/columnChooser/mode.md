---
default: 'dragAndDrop'
acceptValues: 'dragAndDrop' | 'select'
type: String
---
---
##### shortDescription
Specifies how the end-user chooses columns.

---
In the *"dragAndDrop"* mode, the end-user moves column headers to the column chooser and back by drag-and-drop. In the *"select"* mode, the end-user selects column headers in the column chooser using check boxes. In both modes, the corresponding columns appear/disappear in the grid.

When displaying **DataGrid** on touch-enabled devices, it is more convenient to use the *"select"* mode. Yet on mouse-equipped clients, either mode is suitable.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridColumnChooserMode` enum. This enum accepts the following values: `DragAndDrop` and `Select`.