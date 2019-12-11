---
##### shortDescription
Groups the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') data.

##### param(getter): Object
The getter by which to group the data.

##### return: Object
This Query object.

---
The following example demonstrates how to get an array of the Query items grouped by the **name** property value.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .groupBy("name")
        .toArray();

For more information on group expressions, refer to the [Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping') section of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.