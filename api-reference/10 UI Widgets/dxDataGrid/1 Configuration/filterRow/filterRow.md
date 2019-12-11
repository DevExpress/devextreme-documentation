---
type: Object
---
---
##### shortDescription
Specifies [filter row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/070%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row') options.

---
In **DataGrid**, an end-user can filter grid records at runtime using the filter row. This row is located below the grid row that contains column captions. By default, the filter row is hidden. To make it appear, set the [visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/filterRow/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/#visible') option of the **filterRow** object to *true*.

To filter grid records by a value in a grid column, the user must enter the required value (or a part of it) in the filter row cell that belongs to this column. The matched records are determined according to the column's currently selected filter operation. To change this operation, the user must click the magnifying glass icon accompanying each filter row cell and choose the required filter operation from the appeared drop-down list.

[note] This feature is not available for [hidden](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible') columns.

#####See Also#####
- [DataGrid - Filtering](/concepts/05%20Widgets/DataGrid/030%20Filtering '/Documentation/Guide/Widgets/DataGrid/Filtering/')
- [DataGrid - Filtering in Code](/concepts/05%20Widgets/DataGrid/030%20Filtering/060%20Filtering%20in%20Code.md '/Documentation/Guide/Widgets/DataGrid/Filtering/#Filtering_in_Code')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfiltering/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>