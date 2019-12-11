---
default: 'standard'
acceptValues: 'standard' | 'virtual'
type: String
---
---
##### shortDescription
Specifies the rendering mode for columns. Applies when columns are left outside the viewport. Requires the [columnWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnWidth.md '{basewidgetpath}/Configuration/#columnWidth'), [columnAutoWidth](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnAutoWidth.md '{basewidgetpath}/Configuration/#columnAutoWidth'), or [width](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/width.md '{basewidgetpath}/Configuration/columns/#width') (for all columns) option specified.

---
The following rendering modes are available in the widget: 

- *"standard"*        
Renders all columns at once.

- *"virtual"*     
Renders only those columns that get into the viewport.          
This mode is ignored if [banded columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Band_Columns/') are present in the widget.

#include common-ref-enum with {
    enum: "`GridColumnRenderingMode`",
    values: "`Standard` and `Virtual`"
}