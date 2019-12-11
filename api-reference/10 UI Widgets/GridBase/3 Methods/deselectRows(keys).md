---
##### shortDescription
Clears selection of specific rows.

##### param(keys): Array
The keys of rows whose selection should be cleared.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after selection is cleared.

---
To access a row by its key, you should specify the field that provides keys in the [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key.

#####See Also#####
#include common-link-callmethods
- [deselectAll()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deselectAll().md '{basewidgetpath}/Methods/#deselectAll')