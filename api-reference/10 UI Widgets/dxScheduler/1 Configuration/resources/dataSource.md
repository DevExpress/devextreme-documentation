---
default: null
type: array | DataSource | DataSource configuration
---
---
##### shortDescription
A data source used to fetch resources to be available in the scheduler.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

The resource objects must have particular fields so that the **Scheduler** widget can present the resources for end users. For details, refer to the the [Define Resources](/concepts/10%20UI%20Widgets/72%20Scheduler/40%20Resources/010%20Define%20Resources.md '/Documentation/Guide/UI_Widgets/Scheduler/Resources/#Define_Resources') topic.