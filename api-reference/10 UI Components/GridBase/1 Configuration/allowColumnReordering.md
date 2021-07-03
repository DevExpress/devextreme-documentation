---
id: GridBase.Options.allowColumnReordering
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether a user can reorder columns.

---
Initially, columns appear in the order specified by the [columns](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/') array. If you skip specifying this array, columns will mirror the order of fields in the first object from the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'). You can allow a user to reorder columns at runtime by setting the **allowColumnReordering** property to **true**.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnCustomization/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Reordering/",
    name: "TreeList"
}

#####See Also#####
- **columns[]**.[allowReordering](/api-reference/_hidden/GridBaseColumn/allowReordering.md '{basewidgetpath}/Configuration/columns/#allowReordering')