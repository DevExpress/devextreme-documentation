---
id: dxDataGrid.expandRow(key)
---
---
##### shortDescription
Expands a group or a master row with a specific key.

##### return: Promise<void>
A Promise that is resolved after the row is expanded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(key): any
The key of the group or the master row.

---
To expand a group row, call this method with an array (each member of which is a grouping value). To expand a [master row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/'), pass its key to this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')
- [Master-Detail Interface - API](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API')