---
##### shortDescription
Finds the item with the minimum getter value.

##### param(getter): object
The required getter.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
The following example demonstrates how to get the minimum value from the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .max("price")
        .done(function(result) {
            // 'result' holds the desired value
        });

If a Query item is a numeric value, use the [min()](/api-reference/30%20Data%20Layer/Query/3%20Methods/min().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#min') method instead of this one.

For information on getters, refer to the [Getters and Setters section](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') of the Data Layer article.