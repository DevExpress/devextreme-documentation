---
id: dxDataGrid.collapseAll(groupIndex)
---
---
##### shortDescription
Collapses master rows or groups of a specific level.

##### param(groupIndex): Number | undefined
The group's level. Pass **undefined** to collapse all groups. Pass *-1* to collapse all master rows.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailAPI/"
}

[note] The [rowCollapsed](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowCollapsed.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#rowCollapsed') event is not raised when you call this method.

#####See Also#####
#include common-link-callmethods
- [Expand and Collapse Groups - API](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/20%20API/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#API/Expand_and_Collapse_Groups')
- [Expand and Collapse Groups - User Interaction](/concepts/05%20UI%20Components/DataGrid/45%20Grouping/10%20User%20Interaction/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/UI_Components/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups')
- [Master-Detail Interface - API](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API')