---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether or not a particular column can be used in column reordering. Setting this option makes sense only when the [allowColumnReordering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering') option is set to *true*.

---
Initially, grid columns appear in the order specified by the **columns** array. When this array is not specified, grid columns have the same order as the fields of the first object in the data source. A user can reorder columns if the **allowColumnReordering** option is set to *true*. If you need to prohibit using a specific column in the reordering process, set the **allowReordering** option of this column to *false*.