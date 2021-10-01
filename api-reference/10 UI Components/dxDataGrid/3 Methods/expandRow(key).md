---
id: dxDataGrid.expandRow(key)
---
---
##### shortDescription
Expands a group or a master row with a specific key.

##### return: Promise<void>
A Promise that is resolved after the row is expanded.
#include ref-promisedistinction

##### param(key): any
The key of the group or the master row.

---
To expand a group row, call this method with an array (each member of which is a grouping value). To expand a [master row](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/'), pass its key to this method.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailAPI/"
}

A group row can also be expanded when you navigate to a data row within it. See [navigateToRow(key)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/navigateToRow(key).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#navigateToRowkey') for more information.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')
- [Master-Detail Interface - API](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API')