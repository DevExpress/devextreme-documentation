The most simple data layer is one that deals with in-memory arrays. DevExtreme provides an implementation of the [Store interface](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') for this purpose ([ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/')), as well as convenient shortcuts for [creating a DataSource from arrays](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/0%20From%20Array.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Array'), and a Query tool for custom queries (see [Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')).

In this case, the data lifetime equals the lifetime of the application, but no additional setup activity is required. An in-memory [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') is great for easily understanding examples and for prototyping. It can also be used in a real application; for example when you obtain a medium-sized array from a web service and then process it on the client side.

Here is the general form of creating a DataSource from an array.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: {
            type: "array",
            key: "id",
            data: [
                { id: 1, value: "Item 1" }
            ]
        }
    });
    
This notation allows you to specify any configuration options for both the [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/') and [DataSource](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/'). However, more compact forms are available for read-only cases (see [Creating DataSource](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource')).
