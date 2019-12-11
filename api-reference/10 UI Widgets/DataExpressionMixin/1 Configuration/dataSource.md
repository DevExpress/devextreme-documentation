---
default: null
type: String | Array<any> | DataSource | DataSource_Options
---
---
##### shortDescription
A data source used to fetch data the widget should display.

---
This option accepts one of the following:

- Array         
 A JavaScript array that contains string, numeric, Boolean values, or plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 The **DataSource** is an object that provides an API for data processing. The **DataSource**'s underlying data access logic is isolated in a store. Refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') and [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') guides for more information about the **DataSource**.

If the data source contains objects, specify the **key** in the store and/or a [data field providing values]({basewidgetpath}/Configuration/#valueExp) in the widget.

#include widgets-ref-datasource-fieldname-note

If the data source is specified using the **dataSource** option, use the [items](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/items.md '{basewidgetpath}/Configuration/#items') option only for reading. Updating data items using the **items** option may cause unexpected results.

#####See Also#####
- **key** in [ArrayStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') | [CustomStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') | [LocalStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key') | [ODataStore](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key')