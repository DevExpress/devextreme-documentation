---
type: array
---
---
##### shortDescription
Specifies the keys of the records that must appear selected initially.

---
Apart from [runtime selection](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/'), the **DataGrid** provides the capability to display specific grid records selected initially. For this purpose, specify an array containing the keys of grid records that must appear selected and assign it to the **selectedRowKeys** field.

[note]To access a grid record by a key, a field providing key values must be specified in the **key** option of the underlying [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') of the [dataSource](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'). If no key was specified, the whole data object is considered the key, however, we recommend specifying the key to prevent selection from being duplicated.

You can obtain the selected row keys or data objects. For further information, see the [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys') and [getSelectedRowsData()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData') method descriptions.