---
##### shortDescription
Calculates the sum of item values in the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
If a Query item is an object, you should transform it to a numeric type with the [select(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/select(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter') method, or use the [sum(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/sum(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sumgetter') method instead of **sum()**.

The following example demonstrates how to calculate the total **price** value of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .select("price")
        .sum()
        .done(function(result) {
            // 'result' holds the desired value
        });