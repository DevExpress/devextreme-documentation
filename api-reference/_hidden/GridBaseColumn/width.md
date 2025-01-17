---
id: GridBaseColumn.width
type: Number | String | undefined
default: undefined
---
---
##### shortDescription
Specifies the column's width in pixels or as a percentage. Ignored if it is less than [minWidth](/api-reference/_hidden/GridBaseColumn/minWidth.md '{basewidgetpath}/Configuration/columns/#minWidth').

---
The property supports the following types of values:

 - **Number**  
    The column's width in pixels.
 - **String**  
    A CSS-accepted column width measurement (for example, *"55px"*, *"80%"* and *"auto"*) except relative units such as *em*, *ch*, *vh*, etc.     
    
    [note] [Fixed columns](/concepts/05%20UI%20Components/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Column_Fixing/') ignore widths specified as a percentage.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Resizing/",
    name: "TreeList"
}

#####See Also#####
- [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth')
- [columnWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnWidth.md '{basewidgetpath}/Configuration/#columnWidth')
- [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width')