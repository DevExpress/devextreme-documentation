---
type: array | DataSource | DataSource configuration | string
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

After defining the **dataSource**, specify which field of data objects to use as a source for arguments and which one as a source for values using the [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#argumentField') and [valueField](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/Configuration/#valueField') options.