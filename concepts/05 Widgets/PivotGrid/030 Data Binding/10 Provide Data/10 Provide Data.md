DevExtreme is supplied with a set of components called "data library" that helps you read data from different sources. A comprehensive overview of data library features is provided in the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') topic. There are two main concepts, which the data library is built on: DataSource and Store.

DataSource is a stateful object that keeps sorting, grouping, filtering, etc., and applies them each time data is loaded. It also provides events intended to handle data and state changes. More information on the DataSource object can be found in the [Reference](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/') section.

[note] The **PivotGrid** widget accepts a special DataSource type called [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/').

Store is a universal data access interface supporting a number of methods for reading data. You can find the list of these methods in the [What Are Stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') topic. There are five predefined types of Stores used in **PivotGrid**.

* [ArrayStore](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Widgets_PivotGrid_Data_Binding_Provide_Data_Using_the_Data_Layer_Using_an_ArrayStore) - provides access to an in-memory array
* [LocalStore](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Widgets_PivotGrid_Data_Binding_Provide_Data_Using_the_Data_Layer_Using_a_LocalStore) - provides access to the HTML5 web storage 
* [ODataStore](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Widgets_PivotGrid_Data_Binding_Provide_Data_Using_the_Data_Layer_Using_an_ODataStore) - provides access to a remote OData service
* [XmlaStore](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/10%20Provide%20Data/30%20Using%20an%20OLAP.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Provide_Data/Using_an_OLAP') - provides access to a remote OLAP server
* [CustomStore](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Widgets_PivotGrid_Data_Binding_Provide_Data_Using_the_Data_Layer_Using_a_CustomStore) - allows you to implement your own data access logic

**PivotGrid** accepts a PivotGridDataSource instance or a PivotGridDataSource configuration object. The instance or the object must have the **store** field specified (except for a [CustomStore](/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Widgets_PivotGrid_Data_Binding_Provide_Data_Using_the_Data_Layer_Using_a_CustomStore), where all Store settings are specified directly in the object). This field can be set to an object configuring a Store of any type listed above. In further subtopics, you will see configuration examples for using a Store of each type.

You can use one of the two available approaches for providing data for **PivotGrid**. 

* The first approach is processing the raw data on the client side by the **PivotGrid** widget. This approach should be used when the amount of data is several million records and less, otherwise local data processing will cause significant delays. This approach is discussed in greater detail in the [Using the Client-Side Processing](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/10%20Provide%20Data/20%20Using%20the%20Client-Side%20Processing/10%20Using%20the%20Client-Side%20Processing.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Provide_Data/Using_the_Client-Side_Processing') section.   

* The second approach is remote data processing on an OLAP server. This approach allows you to work with a large amount of data (several millions records and more) without delays. For more information on this approach, see the [Using an OLAP](/concepts/05%20Widgets/PivotGrid/030%20Data%20Binding/10%20Provide%20Data/30%20Using%20an%20OLAP.md '/Documentation/Guide/Widgets/PivotGrid/Data_Binding/#Provide_Data/Using_an_OLAP') section.   

