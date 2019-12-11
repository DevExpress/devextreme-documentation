---
##### shortDescription
Selects rows by keys.

##### param(keys): Array
The keys of the rows to be selected.

##### param(preserve): Boolean
Specifies whether previously selected rows should stay selected.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the rows are selected.

---
By default, this method call clears selection of previously selected rows. To keep these rows selected, call this method with **true** as the second argument.

    <!--JavaScript-->widgetInstance.selectRows([5, 10, 12], true);

To access a row by its key, specify the field that provides keys. For this, use the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') option of the [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') that underlies the [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key. However, we recommend specifying the **key** option to prevent selection from being duplicated.

#####See Also#####
#include common-link-callmethods
- [selectRowsByIndexes(indexes)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectRowsByIndexes(indexes).md '{basewidgetpath}/Methods/#selectRowsByIndexesindexes')