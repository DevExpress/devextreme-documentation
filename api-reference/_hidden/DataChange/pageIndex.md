---
id: DataChange.pageIndex
type: Number
---
---
##### shortDescription
Zero-based index of a page into which a new row should be inserted. Applies only if the [type](/api-reference/_hidden/DataChange/type.md '{currentpath}/#type') is *"insert"* and the [pager](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager '{basewidgetpath}/Configuration/pager/') is used.

---

#include common-ctp-note-wo-devextreme 

This field has a value if the {WidgetName} uses the pager. This value equals [paging](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging '{basewidgetpath}/Configuration/paging/').[pageIndex](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageIndex.md '{basewidgetpath}/Configuration/paging/#pageIndex'), but you can override it with a custom value. To add a row to the last page, set this field to -1.

[tags] ctp