---
id: GridBase.Options.columnFixing
type: Object
---
---
##### shortDescription
Configures column fixing.

---
When the width of all columns exceeds the UI component width, horizontal scrolling appears. If specific columns should be on screen constantly regardless of how far the UI component is scrolled, allow a user to fix them at runtime using the context menu. For this, set the **columnFixing**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing/enabled.md '{basewidgetpath}/Configuration/columnFixing/#enabled') option to **true**.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} Column Fixing](/images/{WidgetName}/visual_elements/column_fixing.png)

When you enable column fixing, [command columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/') become fixed automatically. 

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnCustomization/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/ColumnFixing/",
    name: "TreeList"
}

#####See Also#####
- [Column Fixing](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Fixing/')