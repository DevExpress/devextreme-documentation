---
id: GridBase.selectAll()
---
---
##### shortDescription
Selects all rows.

##### return: Promise<void>
A Promise that is resolved after all rows are selected. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
Depending on the value of the [selectAllMode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/selectAllMode.md '{basewidgetpath}/Configuration/selection/#selectAllMode') property, this method selects all rows on all pages or on the currently rendered pages only. If a filter is applied, this method selects only those rows that meet the filtering conditions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
}

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/UI_Components/DataGrid/Selection/#API/Initial_and_Runtime_Selection')
- [selectRows(keys, preserve)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/selectRows(keys_preserve).md '{basewidgetpath}/Methods/#selectRowskeys_preserve') 
- [selection](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection '{basewidgetpath}/Configuration/selection/')