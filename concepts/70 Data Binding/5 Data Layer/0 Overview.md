DevExtreme includes a data layer, which is a set of complementary components that enable you to read and write data. The core data layer objects are [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores').

DataSource simplifies working with data, whether it be an in-memory array, a local browser storage, remote service, or any custom storage. DataSource is a stateful object that maintains sorting, grouping, filtering, and data transformation properties and applies them each time data is loaded. It also includes [events](/api-reference/30%20Data%20Layer/DataSource/4%20Events '/Documentation/ApiReference/Data_Layer/DataSource/Events/') intended to handle changing data and the state.

The DataSource's underlying data access logic is isolated in a Store. Unlike the DataSource, a Store is a stateless object that implements a universal interface to read and modify data. Each Store contains the same set of methods. For more information about Stores, refer to the [What Are Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') section of this article.

The following picture illustrates how the DataSource and Stores interact.

![Data Layer](/images/PhoneJS/scheme-data-layer.png)