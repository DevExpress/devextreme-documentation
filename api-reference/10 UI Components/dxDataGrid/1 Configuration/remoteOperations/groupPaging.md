---
id: dxDataGrid.Options.remoteOperations.groupPaging
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether paging by groups should be performed on the server side.

---
Remote group paging allows you to load groups from a remote source in portions. This feature speeds up grouping because the DataGrid transmits less data. However, requests are more frequent because the DataGrid sends several requests each time a user expands a group or sorts/filters data.

Remote group paging has the following specificities:

- All other operations (filtering, paging, grouping, sorting, and summaries calculation) should also be remote.

- The following conditions should be met:
    
    - Disable the **grouping**.[autoExpandAll](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping/autoExpandAll.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/#autoExpandAll') property.

    - Disable the **column**.[autoExpandGroup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#autoExpandGroup) property for the column the DataGrid is grouped by.

- If you call the [expandAll(groupIndex)](/api-reference/10%20UI%20Components/dxDataGrid/3%20Methods/expandAll(groupIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#expandAllgroupIndex') method, remote group paging does not apply.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RemoteGrouping/"
}