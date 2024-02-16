---
id: GridBase.Options.columnResizingMode
type: Enums.ColumnResizeMode
default: 'nextColumn'
---
---
##### shortDescription
Specifies how the UI component resizes columns. Applies only if [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '{basewidgetpath}/Configuration/#allowColumnResizing') is **true**.

---
The **columnResizingMode** property accepts one of the following values:

- **nextColumn**  
    When a user resizes a column, the width of the next column changes.  
- **widget**  
    When a user resizes a column, the width of the UI component changes.  
    This mode is ignored if you specify the [width](/api-reference/_hidden/GridBaseColumn/width.md '{basewidgetpath}/Configuration/columns/#width') of any column in percent.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnResizing/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Resizing/",
    name: "TreeList"
}

[note] If this property is set to `'nextColumn'` (default) and you enable the [columnHidingEnabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnHidingEnabled) property, then also enable [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth) to ensure the component works properly.