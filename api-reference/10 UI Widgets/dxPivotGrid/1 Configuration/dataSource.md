---
default: null
type: Array | PivotGridDataSource | PivotGridDataSource_Options
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

For more information on how to implement a data source and bind it to your pivot grid, refer to the [Data Binding](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/10%20Data%20Binding.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/') topic.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/LocalDataSource/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>