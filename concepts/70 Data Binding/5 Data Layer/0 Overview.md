The DevExtreme framework includes a data layer, which is a set of complementary components that enable you to read and write data. The core data layer objects are [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores).

The DataSource is intended to simplify working with data, whether it be an in-memory array, a local browser storage, remote service, or any custom storage. The DataSource is a stateful object that keeps sorting, grouping, filtering, and keeps data transformation options and applies them each time data is loaded. It also provides [events](/api-reference/30%20Data%20Layer/DataSource/4%20Events '/Documentation/ApiReference/Data_Layer/DataSource/Events/') intended to handle changing data and the state.

The DataSource underlying data access logic is isolated in a Store. Unlike the DataSource, a Store is a stateless object implementing a universal interface for reading and modifying data. Each Store contains the same set of methods. For more information about Stores refer to the [What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) section of this article.

The following picture illustrates how the DataSource and Stores interact.

![Data Layer](/images/PhoneJS/scheme-data-layer.png)