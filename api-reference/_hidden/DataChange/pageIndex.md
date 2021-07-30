---
id: DataChange.pageIndex
type: Number
---
---
##### shortDescription
Zero-based index of a page into which a new row should be inserted. Applies only if the [type]({currentpath}/#type) is *"insert"* and the [pager]({basewidgetpath}/Configuration/pager/) is used.

---

#include common-ctp-note-wo-devextreme 

This field has a value if the {WidgetName} uses the pager. This value equals [paging]({basewidgetpath}/Configuration/paging/).[pageIndex]({basewidgetpath}/Configuration/paging/#pageIndex), but you can override it with a custom value. To add a row to the last page, set this field to -1.

[tags] ctp