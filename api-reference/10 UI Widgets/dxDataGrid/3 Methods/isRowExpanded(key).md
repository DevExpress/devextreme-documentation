---
##### shortDescription
Allows you to find out whether a specific group or master row is expanded or collapsed.

##### param(key): any
The key of the group or master row.

##### return: Boolean
<i>true</i> if the row is expanded; <i>false</i> if collapsed.

---
To find out whether a [group row](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows') is expanded, call this method with an array, in which each member is a grouping value. To find out if a [master row](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/') is expanded, pass its key to this method.