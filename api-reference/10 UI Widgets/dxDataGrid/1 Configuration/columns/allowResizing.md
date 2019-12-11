---
default: true
type: boolean
---
---
##### shortDescription
Specifies whether or not a particular column can be resized by a user. Setting this option makes sense only when the [allowColumnResizing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing') option is *true*.

---
By default, the width of each grid column is calculated automatically, depending on the width of the widget's container and the total number of grid columns. To specify the width of a specific column, use the column's [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') option. At runtime, a user can resize columns if the **allowColumnResizing** option is set to *true*. If you need to prohibit resizing for a specific column, set the **allowResizing** option of this column to *false*.