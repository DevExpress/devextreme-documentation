---
default: null
type: array | DataSource | DataSource configuration
---
---
##### shortDescription
A data source used to fetch data to be displayed by the widget.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

[note]If the data source is specified using the **dataSource** option, use the [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items.md '{basewidgetpath}/Configuration/#items') option only for reading. Updating data items using the **items** option may cause unexpected results.

To display widget items, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxMenuBase/5%20Default%20Item%20Template '{basewidgetpath}/Default_Item_Template/') section of the widget's API. Alternatively, you can implement a custom item template. For details, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance') topic.