---
default: null
type: String | Array<Object> | DataSource | DataSource_Options
---
---
##### shortDescription
A data source used to fetch resources to be available in the scheduler.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
  The URL of a JSON file or service that returns JSON data.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 The **DataSource** is an object that provides an API for data processing. The **DataSource**'s underlying data access logic is isolated in a store. Refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') and [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') guides for more information about the **DataSource**. 

    [note] Turn the **DataSource**'s [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') off to prevent data from partitioning.

#include widgets-ref-datasource-fieldname-note

The resource objects must have particular fields so that the **Scheduler** widget can present the resources for end users. For details, refer to the [Define Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/') topic.