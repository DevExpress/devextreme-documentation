---
default: null
type: String | Array<String, CollectionWidgetItemTemplate> | DataSource | DataSource_Options
---
---
##### shortDescription
A data source used to fetch data to be displayed by the widget.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
  The URL of a JSON file or service that returns JSON data.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

#include widgets-ref-datasource-fieldname-note

If the data source is specified using the **dataSource** option, use the [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items.md '{basewidgetpath}/Configuration/#items') option only for reading. Updating data items using the **items** option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template '{basewidgetpath}/Default_Item_Template/') section of the widget's API.