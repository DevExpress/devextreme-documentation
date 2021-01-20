---
id: GridBase.isAdaptiveDetailRowExpanded(key)
---
---
##### shortDescription
Checks whether an adaptive detail row is expanded or collapsed.

##### return: Boolean
*true* if the adaptive detail row is expanded; **false** if collapsed.

##### param(key): any
The key of the data row to which the adaptive detail row belongs.

---
To access a data row by its key, specify the field that provides keys in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key.

#####See Also#####
#include common-link-callmethods
- [expandAdaptiveDetailRow(key)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/expandAdaptiveDetailRow(key).md '{basewidgetpath}/Methods/#expandAdaptiveDetailRowkey')
- [collapseAdaptiveDetailRow()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/collapseAdaptiveDetailRow().md '{basewidgetpath}/Methods/#collapseAdaptiveDetailRow')
- [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '{basewidgetpath}/Configuration/#columnHidingEnabled')