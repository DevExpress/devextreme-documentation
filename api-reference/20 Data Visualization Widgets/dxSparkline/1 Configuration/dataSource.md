---
type: Array | DataSource | DataSource_Options | String
---
---
##### notUsedInTheme

##### shortDescription
Specifies a data source for the sparkline.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

#####See Also#####
- [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#argumentField')
- [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#valueField')
- [getDataSource()](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer')
- [Data Layer - Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples')