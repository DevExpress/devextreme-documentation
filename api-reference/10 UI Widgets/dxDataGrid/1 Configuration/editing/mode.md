---
default: 'row'
acceptValues: 'row' | 'batch' | 'cell' | 'form'
type: String
---
---
##### shortDescription
Specifies how grid values can be edited manually.

---
Editing grid values requires the [allowUpdating](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating') option to be set to *true*.

For a comprehensive overview of available edit modes, refer to the [Row Mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/20%20Row%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode'), [Batch Mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode'), [Cell Mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/40%20Cell%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Cell_Mode') and [Form Mode](/concepts/05%20Widgets/DataGrid/070%20Data%20Editing/20%20Editing%20in%20UI/50%20Form%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Form_Mode') articles.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `GridEditMode` enum. This enum accepts the following values: `Row`, `Batch`, `Cell` and `Form`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowEditingAndEditingEvents/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Row Editing Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/BatchEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Batch Editing Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/CellEditingAndEditingAPI/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Cell Editing Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/FormEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Form Editing Demo</a>