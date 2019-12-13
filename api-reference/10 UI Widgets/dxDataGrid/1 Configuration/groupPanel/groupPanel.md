---
id: dxDataGrid.Options.groupPanel
type: Object
---
---
##### shortDescription
Configures the [group panel](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/10%20Group%20Data.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Group_Data').

---
Data in **DataGrid** can be grouped by one column or by several. Once a column is used for grouping, it is added to the group panel.

By default, the group panel is hidden. To make it visible, set the **groupPanel**.[visible](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible') option to **true**. Alternatively, the visibility of the group panel can depend on the device's screen size. To accomplish this behavior, set the **visible** option to *"auto"*.

In case you need to show the group panel, but make it irresponsive, assign **false** to the **groupPanel**.[allowColumnDragging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/groupPanel/allowColumnDragging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#allowColumnDragging') option. This is useful, for instance, when grid records are grouped initially and when the user needs to know about that grouping, but must not be able to change it.

#####See Also#####
- [Grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/')
- **grouping**.[contextMenuEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/contextMenuEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled') - enables the user to group data using the context menu.
- **columns[]**.[allowGrouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') - disallows grouping for an individual column.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RecordGrouping/"
}