---
##### shortDescription
Reloads data and repaints the widget.

##### return: Promise<void>
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
The widget cannot track changes a third party makes in the data source. To update data in the widget in this case, call this method. [Data sources](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup/dataSource.md '{basewidgetpath}/Configuration/columns/lookup/#dataSource') of lookup columns are updated with the main data source.

[note] Calling the **refresh()** method ends the editing process. In *batch* [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), changes are saved in a buffer before they are saved to the data source. In other modes, all unsaved changes are discarded. 

#####See Also#####
- [refresh(changesOnly)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh(changesOnly).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refreshchangesOnly')
#include common-link-callmethods