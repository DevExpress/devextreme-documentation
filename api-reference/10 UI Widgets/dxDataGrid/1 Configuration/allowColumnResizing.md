---
default: false
type: Boolean
---
---
##### shortDescription
Specifies whether or not grid columns can be resized by a user.

---
By default, the width of each grid column is calculated automatically, depending on the width of the widget's container and the total number of grid columns. To specify the width of a specific column in code, use the **columns** | [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') option. You can allow a user to resize columns at runtime. To enable this capability, set the **allowColumnResizing** option to *true*. After that, each grid column can be resized by dragging its border.

Once enabled, column resizing will be allowed for all grid columns. If you need to restrict a specific column from being resized, set the [allowResizing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowResizing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowResizing') option of this column to *false*.