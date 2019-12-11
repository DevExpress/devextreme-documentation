---
##### shortDescription
Adds one more sorting condition to the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### param(getter): Object
The getter by which to sort the items.

##### param(desc): Boolean
Specifies whether to sort items in descending or ascending order.

##### return: Object
This Query object.

---
This method can only follow the [sortBy(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/sortBy(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter'), [sortBy(getter, desc)](/api-reference/30%20Data%20Layer/Query/3%20Methods/sortBy(getter_desc).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter_desc'), [thenBy(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/thenBy(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter') or the other **thenBy(getter, desc)** methods.

The following example demonstrates how to get an array of the Query items sorted by **category** and then by **name** property values in the descending order.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .sortBy("category")
        .thenBy("name", true)
        .toArray();

For more information on sort expressions, refer to the [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting') section of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.