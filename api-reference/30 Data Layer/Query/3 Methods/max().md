---
##### shortDescription
Finds the item with the maximum value in the [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
If a Query item is an object, you should transform it to a numeric type with the [select(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/select(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter') method, or use the [max(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/max(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#maxgetter') method instead of **max()**.

The following example demonstrates how to get the maximum value from the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .select(function(itemData) {
            return itemData.price;
        })
        .max()
        .done(function(result) {
            // 'result' holds the desired value
        });