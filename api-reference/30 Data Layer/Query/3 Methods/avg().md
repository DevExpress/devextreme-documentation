---
##### shortDescription
Calculates the average item value for the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/'), if each Query item has a numeric type.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
If a Query item is an object, you should transform it to a numeric type with the [select(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/select(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter') method, or use the [avg(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/avg(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#avggetter') method instead of **avg()**.

The following example demonstrates how to calculate the average value of the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .select("price")
        .avg()
        .done(function(result) {
            // 'result' holds the desired value
        });