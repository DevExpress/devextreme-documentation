---
id: GridBaseColumn.width
type: Number | String
default: undefined
---
---
##### shortDescription
Specifies the column's width in pixels or as a percentage. Ignored if it is less than [minWidth](/api-reference/_hidden/GridBaseColumn/minWidth.md '{basewidgetpath}/Configuration/columns/#minWidth').

---
The option supports the following types of values:

 - **Number**  
    The column's width in pixels.
 - **String**  
    A CSS-accepted column width measurement (for example, *"55px"*, *"80%"* and *"auto"*) except relative units such as *em*, *ch*, *vh*, etc.     
    
    [note] [Fixed columns](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Fixing/') ignore widths specified as a percentage.

#####See Also#####
- [columnAutoWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth')
- [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/width.md '{basewidgetpath}/Configuration/#width')