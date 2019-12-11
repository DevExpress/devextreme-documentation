---
##### shortDescription
Returns the key corresponding to the passed data object.

##### param(obj): object
A data object.

##### return: any
The key of the passed data object.

---
If a field providing key values is not specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key. In this case, the **keyOf(obj)** method returns its argument.