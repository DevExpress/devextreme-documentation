---
##### shortDescription
Specifies the keys of rows that must be selected initially.

---
To access a row by its key, you should specify the field that provides keys. For this, use the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') option of the [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') that underlies the [dataSource](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key. However, we recommend specifying the **key** option to prevent selection from being duplicated.

#####See Also#####
- [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowKeys().md '{basewidgetpath}/Methods/#getSelectedRowKeys')
- [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowsData().md '{basewidgetpath}/Methods/#getSelectedRowsData')