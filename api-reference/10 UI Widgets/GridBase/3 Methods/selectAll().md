---
id: GridBase.selectAll()
---
---
##### shortDescription
Selects all rows.

##### return: Promise<void>
A Promise that is resolved after all rows are selected. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
Depending on the value of the [selectAllMode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/selectAllMode.md '{basewidgetpath}/Configuration/selection/#selectAllMode') option, this method selects all rows on all pages or on the currently rendered pages only. If a filter is applied, this method selects only those rows that meet the filtering conditions.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection')
- [selectRows(keys, preserve)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRows(keys_preserve).md '{basewidgetpath}/Methods/#selectRowskeys_preserve') 
- [selection](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection '{basewidgetpath}/Configuration/selection/')