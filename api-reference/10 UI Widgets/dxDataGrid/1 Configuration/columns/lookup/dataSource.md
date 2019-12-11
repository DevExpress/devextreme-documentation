---
default: undefined
type: array | DataSource configuration | function(options)
---
---
##### shortDescription
Specifies the data source providing data for a lookup column.

##### param(options): object
The options of the current row.

##### field(options.data): object
The data object represented by the current grid row.

##### field(options.key): any
The key value of the clicked row.

---
In order to have correspondence between the values from the main [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') and those values that need to be displayed, specify a lookup data source. This data source can be one of the following.

- An Array of objects  
	The fields of each object will be used to provide data for the lookup select box.

- A [DataSource Configuration Object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')  
	The DataSource is a stateful object that includes options for data sorting, grouping, filtering; it also keeps data transformation options and applies them each time data is loaded. The DataSource also provides events intended to handle changing data and the state. The DataSource underlying data access logic is isolated in a [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores'). Unlike the DataSource, a Store is a stateless object implementing a universal interface for reading and modifying data. To learn more, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') topic.

- A function returning any of the types specified above based on data of the entire row.

The lookup data source must contain fields that are used to define the **valueExpr** and **displayExpr** options of the **lookup** configuration object.

When using a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') to specify a data source for a lookup column, implementing its [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') and [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') functions is mandatory.