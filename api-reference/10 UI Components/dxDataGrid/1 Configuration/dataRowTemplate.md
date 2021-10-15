---
id: dxDataGrid.Options.dataRowTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data rows.

##### param(rowElement): DxElement
#include common-ref-elementparam with { element: "row" }

##### param(rowInfo): Object
Information about the row that is being customized.

##### field(rowInfo.columns): Array<dxDataGridColumn>
<!-- %field(e.columns)% -->

##### field(rowInfo.component): dxDataGrid
<!-- %field(e.component)% -->

##### field(rowInfo.data): any
<!-- %field(e.data)% -->

##### field(rowInfo.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Applies if this is a master row in the [master-detail interface](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailView/).

##### field(rowInfo.isSelected): Boolean
<!-- %field(e.isSelected)% -->

##### field(rowInfo.key): any
<!-- %field(e.key)% -->

##### field(rowInfo.rowIndex): Number
<!-- %field(e.rowIndex)% -->

##### field(rowInfo.values): Array<any>
<!-- %field(e.values)% -->

##### return: any
A template name or container.

---
The following details should be taken into account when you use a **dataRowTemplate**:

- Disable [column reordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnReordering'), [grouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowGrouping'), and [column fixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnFixing/') when you specify the row template. Its content cannot automatically synchronize with the column layout, which makes these features inoperative. [Command columns](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/') are not supported either.

- You should implement the following features manually: [editing](/api-reference/10%20UI%20Components/GridBase/3%20Methods/editRow(rowIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#editRowrowIndex'), [adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/DataGrid/Columns/Adaptability/'), [selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API '/Documentation/Guide/UI_Components/DataGrid/Selection/#API'), [master-detail interface](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API'), and [focused row](/concepts/05%20UI%20Components/DataGrid/73%20Focused%20Row.md '/Documentation/Guide/UI_Components/DataGrid/Focused_Row/'). Follow the links to review the API that can help you with this task.

- When the DataGrid is [exported](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), it omits customizations made in the template. However, you can recreate them in the exported file using the ExcelJS API. Use the [customizeCell](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#customizeCell') function to do this.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowTemplate/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
- [onRowPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowPrepared')

<!-- import * from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onRowClick.md' -->