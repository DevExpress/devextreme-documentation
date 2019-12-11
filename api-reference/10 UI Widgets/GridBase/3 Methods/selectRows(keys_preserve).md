---
##### shortDescription
Selects rows with specific keys.

##### param(keys): Array<any>
The row keys.

##### param(preserve): Boolean
Specifies whether previously selected rows should stay selected.

##### return: Promise<any>
A Promise that is resolved after the rows are selected. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
By default, this method call clears selection of previously selected rows. To keep these rows selected, call this method with **true** as the second argument.

    <!--JavaScript-->widgetInstance.selectRows([5, 10, 12], true);

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection')
- [selectRowsByIndexes(indexes)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRowsByIndexes(indexes).md '{basewidgetpath}/Methods/#selectRowsByIndexesindexes')