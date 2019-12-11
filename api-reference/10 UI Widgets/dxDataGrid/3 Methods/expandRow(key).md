---
##### shortDescription
Allows you to expand a specific group or master row by its key.

##### param(key): any
The key of the group or master row.

##### return: Promise
A Promise of the jQuery.Deferred object that is resolved after the row is expanded.

---
To expand a group row, call this method with an array (each member of which is a grouping value). To expand a [master row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/'), pass its key to this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/concepts/05%20Widgets/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')
- [Master-Detail Interface - API](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API')