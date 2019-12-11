---
##### shortDescription
Calculates a custom summary for the items in the current [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/').

##### param(step): function()
A function called for each item.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the operation is completed.

---
The **step** function takes on two arguments. The first argument is an accumulator value changed on each **step** function execution. The **step** function should return the updated value of this argument. 

[note] The accumulator value is initialized to the value of the first item. Therefore, the step function is called only for the second item, and subsequent items.

The following example demonstrates how to calculate the total value for the Query items. Suppose that each item of the Query is an object providing the **price** numeric property, among other properties.

    <!--JavaScript-->
    var total = 0;
    DevExpress.data.query(inputArray)
        .aggregate(
            function(total, itemData) {
                total += itemData;
            }
        )
        .done(function(result) {
            // 'result' holds the desired value
        });

The total value calculation is a demonstrative example of this function's usage. However, note that this functionality is already implemented in the [sum()](/api-reference/30%20Data%20Layer/Query/3%20Methods/sum().md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sum') and [sum(getter)](/api-reference/30%20Data%20Layer/Query/3%20Methods/sum(getter).md '/Documentation/ApiReference/Data_Layer/Query/Methods/#sumgetter') methods.