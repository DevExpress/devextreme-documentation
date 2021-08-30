---
id: DataChange.index
type: Number
---
---
##### shortDescription
Zero-based index of a new row. Applies only if the [type](/api-reference/_hidden/DataChange/type.md '{currentpath}/#type') is *"insert"*.

---

#include common-ctp-note-wo-devextreme 

If the [pageIndex](/api-reference/_hidden/DataChange/pageIndex.md '{currentpath}/#pageIndex') has a value, this field sets a row index on the specified page. In other cases, this field specifies the row index within the entire grid. Only data and group rows are indexed. To add a row to the end of the page or grid, set **index** to -1.

[tags] ctp