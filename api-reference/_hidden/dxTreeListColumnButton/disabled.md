---
id: dxTreeListColumnButton.disabled
type: Boolean | function(options)
default: false
---
---
##### shortDescription
Specifies whether the button is disabled.

##### param(options): Object
Information about the current row and column that contain the button.

##### field(options.column): dxTreeListColumn
The column's properties.

##### field(options.component): dxTreeList
The UI component's instance.

##### field(options.row): dxTreeListRowObject
The row's properties.

##### return: Boolean
**true** if the button should be disabled; otherwise, **false**.

---
Use the function to activate or disable the button for specific rows. See a related example in the **buttons[]**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/buttons/#visible) topic.