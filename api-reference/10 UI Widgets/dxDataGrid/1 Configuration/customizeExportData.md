---
type: function(columns, rows)
---
---
##### shortDescription
Customizes grid columns and data before exporting.

##### param(columns): Array
<a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">Grid columns</a>.

##### param(rows): Array
<a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Row/">Grid rows</a>. If only selected rows are to be exported, this array contains only them.

---
The function assigned to this option will be called between the [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') and [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') functions. Use the arguments of this function to access and change different column and row options.

#####See Also#####
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') | **enabled**
- **columns[]** | [allowExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting')