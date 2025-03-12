### Sticky Columns

As you may know, both the DevExtreme DataGrid and TreeList ship with fixed column support (allowing you to fix columns to a table's edge).

Prior to the availability of advanced CSS positioning tools, our fixed column setup used two separate tables. In v24.2, we overhauled this mechanism: fixed columns are now integrated into the main table.

This update also introduces a new value for the [fixedPosition](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixedPosition) property: `sticky`. Sticky columns behave initially as regular columns. When scrolling horizontally, they adhere to the left and right edges of the table upon reaching them. This enhances usability by keeping key information visible at all times.

![DevExtreme DataGrid with sticky columns](/images/whats-new/24-2-js-sticky-columns.gif)

The context menu used to fix columns now includes icons for various fixed positions.

![A context menu with "Set Fixed Position" item invoked in DevExtreme DataGrid](/images/whats-new/24-2-js-sticky-menu.png)

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FixedAndStickyColumns/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnFixing/",
    name: "TreeList"
}