---
default: null
type: array | PivotGridDataSource | PivotGridDataSource configuration
---
---
##### shortDescription
Specifies a data source for the pivot grid.

---
To provide data for a pivot grid, use the **dataSource** option. This option takes on one of the following.

- An array of objects       
	The fields of each object will be used to provide data for corresponding pivot grid fields.

- A [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') or its [Configuration Object](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/')     
The DataSource is an object that includes options for data sorting, grouping and filtering. The DataSource's underlying data access logic is isolated in a [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores'). Unlike the DataSource, a Store is a stateless object implementing a universal interface for reading and modifying data. If the [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') type is not [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'), the **PivotGridDataSource** also describes pivot grid [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').

For more information on how to implement a data source and bind it to your pivot grid, refer to the [Data Binding](/concepts/10%20UI%20Widgets/71%20Pivot%20Grid/030%20Data%20Binding/10%20Data%20Binding.md '/Documentation/Guide/UI_Widgets/Pivot_Grid/Data_Binding/') topic.