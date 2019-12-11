---
##### shortDescription
Sorts current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/') data.

##### param(getter): object
The getter by which to sort the data.

##### param(desc): boolean
Specifies whether to sort items in descending or ascending order.

##### return: object
This Query object.

---
The following example demonstrates how to get an array of the Query items sorted by the **name** property value in the descending order.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .sortBy("name", true)
        .toArray();

For more information on sorting expressions, refer to the [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting') section of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.