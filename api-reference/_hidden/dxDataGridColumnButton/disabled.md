---
id: dxDataGridColumnButton.disabled
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether the button is disabled.
 
##### param(options): Object
Information about the current row and column that contain the button.

##### field(options.column): dxDataGridColumn
The column's properties.

##### field(options.component): dxDataGrid
The UI component's instance.

##### field(options.row): dxDataGridRowObject
The row's properties.

##### return: Boolean
**true** if the button should be disabled; otherwise, **false**.

---
#####See Also#####
- **buttons[]**.[visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/#visible)