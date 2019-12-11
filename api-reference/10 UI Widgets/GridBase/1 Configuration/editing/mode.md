---
default: 'row'
acceptValues: 'batch' | 'cell' | 'row' | 'form' | 'popup'
type: String
---
---
##### shortDescription
Specifies how a user edits data.

---
The following list points out the differences in editing modes.

- [**Row**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/10%20Row%20Mode.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Row_Mode')       
A user edits one row at a time. The widget saves changes when the row leaves the editing state. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/RowEditing/jQuery/Light).
- [**Batch**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Batch_Mode')     
A user edits data cell by cell. The widget does not save changes until a user clicks the global *"Save"* button. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/BatchEditing/jQuery/Light).
- [**Cell**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/20%20Cell%20Mode.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Cell_Mode')      
Differs from the batch mode in that the widget saves changes when the cell leaves the editing state. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/CellEditing/jQuery/Light).
- [**Form**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Form_Mode')      
On entering the editing state, a row becomes a form with editable fields. The widget saves changes after a user clicks the *"Save"* button. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/FormEditing/jQuery/Light).
- [**Popup**](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/50%20Popup%20Mode.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Popup_Mode')     
Differs from the form mode in that the form with editable fields is placed in a popup window. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/PopupEditing/jQuery/Light).

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridEditMode` enum. This enum accepts the following values: `Row`, `Batch`, `Cell`, `Form` and `Popup`.