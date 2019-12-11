---
default: false
type: boolean
---
---
##### shortDescription
Specifies whether or not grid columns can be reordered by a user.

---
Initially, grid columns appear in the order specified by the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. When this array is not specified, grid columns have the same order as the fields of the first object from the data source. You can provide the capability for a user to reorder grid columns. To enable this capability, set the **allowColumnReordering** option to *true*. After that, grid columns can be reordered by dragging their headers.

Once enabled, all grid columns can be reordered by drag-and-drop. If you need to restrict a specific column from being reordered, set the [allowReordering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowReordering') option of this column to *false*.