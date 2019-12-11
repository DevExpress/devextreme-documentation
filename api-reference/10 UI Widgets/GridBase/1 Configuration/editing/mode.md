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

- **Row**       
A user edits one row at a time. The widget saves changes when the row leaves the editing state. See [Row Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/10%20Row%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Row_Mode').
- **Batch**     
A user edits data cell by cell. The widget does not save changes until a user clicks the global *"Save"* button. See [Batch Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode').
- **Cell**      
Differs from the batch mode in that the widget saves changes when the cell leaves the editing state. See [Cell Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/20%20Cell%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Cell_Mode').
- **Form**      
On entering the editing state, a row becomes a form with editable fields. The widget saves changes after a user clicks the *"Save"* button. See [Form Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode').
- **Popup**     
Differs from the form mode in that the form with editable fields is placed in a popup window. See [Popup Mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/50%20Popup%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Popup_Mode').

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option using the `GridEditMode` enum. This enum accepts the following values: `Row`, `Batch`, `Cell`, `Form` and `Popup`.

<a href="/Demos/WidgetsGallery/Demo/Data_Grid/RowEditingAndEditingEvents/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Row Editing Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/BatchEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Batch Editing Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/CellEditingAndEditingAPI/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Cell Editing Demo</a>
<a href="/Demos/WidgetsGallery/Demo/Data_Grid/FormEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Form Editing Demo</a>