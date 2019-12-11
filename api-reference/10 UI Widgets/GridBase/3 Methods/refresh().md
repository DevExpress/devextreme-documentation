---
##### shortDescription
Reloads data in the widget.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after data is loaded.

---
The widget cannot track changes made in the data source by a third party. To bring data in the widget up to date in this case, call this method. [Data sources](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup/dataSource.md '{basewidgetpath}/Configuration/columns/lookup/#dataSource') of lookup columns will be updated along with the main data source.

[note] Calling the **refresh()** method ends the editing process. In *batch* [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), changes are saved in a buffer waiting to be saved in the data source. In other modes, all unsaved changes vanish.

#####See Also#####
#include common-link-callmethods